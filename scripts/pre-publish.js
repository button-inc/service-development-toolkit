const { green, cyan, red } = require('chalk');

const path = require('path');
const fse = require('fs-extra');
const { argv } = require('yargs');

const { name } = argv;

if (!name) {
  console.error(red('package name is not provided!'));
  process.exit(1);
}

const output = 'lib';
const packageDir = `packages/${name}`;
const packageRoot = path.join(__dirname, '../', packageDir);

const packageJson = fse.readFileSync(`${packageRoot}/package.json`).toString('utf-8');
const packageConfig = JSON.parse(packageJson);

const publishConfig = {};
[
  'name',
  'version',
  'description',
  'keywords',
  'homepage',
  'bugs',
  'license',
  'author',
  'sideEffects',
  'repository',
  'dependencies',
  'peerDependencies',
  'publishConfig',
  'release',
].forEach(key => {
  if (packageConfig[key]) publishConfig[key] = packageConfig[key];
});

['main', 'module', 'types'].forEach(key => {
  // lib/**/*.js -> **/*.js
  if (packageConfig[key]) publishConfig[key] = packageConfig[key].slice(output.length + 1);
});

fse.writeFileSync(
  `${packageRoot}/${output}/package.json`,
  Buffer.from(JSON.stringify(publishConfig, null, 2), 'utf-8')
);

['LICENSE', 'README.md'].forEach(file => {
  const src = `${packageRoot}/${file}`;
  const dest = `${packageRoot}/${output}/${file}`;

  if (fse.pathExistsSync(src)) {
    fse.copySync(src, dest);
  }
});
