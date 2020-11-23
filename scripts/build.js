// Build configuration taken from https://github.com/react-bootstrap/react-bootstrap/blob/master/tools/build.js
// and optimized to fit to this project.

const { green, cyan, red } = require('chalk');
const webpack = require('webpack');

const path = require('path');
const fse = require('fs-extra');
const execa = require('execa');
const cherryPick = require('cherry-pick').default;
const { argv } = require('yargs');
const getConfig = require('./dist.webpack.config');

const { name } = argv;
const targets = (argv.target && (Array.isArray(argv.target) ? argv.target : [argv.target])) || [];

if (!name) {
  console.error(red('package name is not provided!'));
  process.exit(1);
}

const packageDir = `packages/${name}`;
const packageRoot = path.join(__dirname, '../', packageDir);

const srcRoot = path.join(packageRoot, 'src');
const typesRoot = path.join(packageRoot, 'types');
const libRoot = path.join(packageRoot, 'lib');

const umdRoot = path.join(libRoot, 'umd');
const cjsRoot = path.join(libRoot, 'cjs');
const esmRoot = path.join(libRoot, 'esm');

console.log(green(`Start building: ${name}`));

const clean = () => fse.existsSync(libRoot) && fse.removeSync(libRoot);

const step = (msg, fn) => async () => {
  console.log(cyan('Building: ') + green(msg));
  await fn();
  console.log(cyan('Built: ') + green(msg));
};

const shell = cmd => execa(cmd, { stdio: ['pipe', 'pipe', 'inherit'], shell: true });

const has = t => !targets.length || targets.includes(t);

const buildTypes = step('generating .d.ts', () => shell(`yarn build-types`));

const copyTypes = dest => shell(`cpy ${typesRoot}/*.d.ts ${dest}`);

const babel = (outDir, envName) =>
  shell(`yarn babel ${srcRoot} -x .es6,.js,.es,.jsx,.mjs,.ts,.tsx --out-dir ${outDir} --env-name "${envName}"`);

/**
 * Run babel over the src directory and output
 * compiled common js files to ./lib.
 */
const buildCjs = step('commonjs modules', async () => {
  await babel(cjsRoot, 'cjs');
  await copyTypes(cjsRoot);
});

/**
 * Run babel over the src directory and output
 * compiled es modules (but otherwise es5) to /es
 */
const buildEsm = step('es modules', async () => {
  await babel(esmRoot, 'esm');
  await copyTypes(esmRoot);
});

/**
 * Bundles a minified and unminified version of package including
 * all it's immediate dependencies (excluding React, ReactDOM, etc)
 */
const buildUmd = step(
  'browser distributable',
  () =>
    new Promise((resolve, reject) => {
      webpack([getConfig(umdRoot, name, false), getConfig(umdRoot, name, true)], (err, stats) => {
        if (err || stats.hasErrors()) {
          reject(err || stats.toJson().errors);
          return;
        }

        resolve();
      });
    })
);

const buildDirectories = step('Linking directories', () =>
  cherryPick({
    inputDir: '../src',
    cjsDir: 'cjs',
    esmDir: 'esm',
    cwd: libRoot,
  })
);

console.log(green(`Building targets: ${targets.length ? targets.join(', ') : 'all'}\n`));

clean();

(async () => {
  try {
    await buildTypes();
    await Promise.all([has('cjs') && buildCjs(), has('esm') && buildEsm(), has('umd') && buildUmd()]);
    await buildDirectories();
  } catch (err) {
    console.error(red(err.stack || err.toString()));
    process.exit(1);
  }
})();
