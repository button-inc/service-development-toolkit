const { green, cyan, red } = require('chalk');

const path = require('path');
const fse = require('fs-extra');
const { argv } = require('yargs');
const glob = require('glob');

const { name } = argv;

if (!name) {
  console.error(red('package name is not provided!'));
  process.exit(1);
}

const parseJson = dir => {
  const content = fse.readFileSync(dir).toString('utf-8');
  return JSON.parse(content);
};

const writeJson = (dir, object) => {
  fse.writeFileSync(dir, Buffer.from(JSON.stringify(object, null, 2), 'utf-8'));
};

const repoRoot = path.join(__dirname, '../');

const packageDir = `packages/${name}`;
const packageRoot = path.join(__dirname, '../', packageDir);

const rootPackageJson = parseJson(`${repoRoot}/package.json`);
const packageJson = parseJson(`${packageRoot}/package.json`);

const workspacePackages = rootPackageJson.workspaces.packages || [];

const targetName = packageJson.name;
const targetVersion = packageJson.version;

workspacePackages.forEach(dir => {
  glob(`${dir}/package.json`, null, function (er, files) {
    files.forEach(file => {
      const pjson = parseJson(file);
      let updated = false;

      ['dependencies', 'devDependencies', 'peerDependencies'].forEach(type => {
        if (!pjson[type]) return;
        if (!pjson[type][targetName]) return;

        const oldVersion = pjson[type][targetName];
        if (oldVersion !== targetVersion) {
          pjson[type][targetName] = targetVersion;
          updated = true;

          console.log(green(`updated the version in ${file}.${type}`));
        }
      });

      if (updated) writeJson(file, pjson);
    });
  });
});
