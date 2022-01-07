const { cdktf, vscode, Gitpod } = require('projen');

const { ReleaseTrigger } = require('projen/lib/release');

const project = new cdktf.ConstructLibraryCdktf({
  author: 'Brian',
  authorAddress: 'briankanya@gmail.com',
  cdktfVersion: '0.8.5',
  defaultReleaseBranch: 'master',
  deps: ['@cdktf/provider-aws', 'constructs'],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  description: 'A CDKTF library for Lorex Camera Object Notification',
  gitignore: [
    '**/*.d.ts',
    '**/*.js',
    '.DS_Store',
    '.gen',
    '.terraform*',
    '/test/__snapshots__/',
    'cdktf.json',
    'cdktf.out',
    'package-lock.json',
    'terraform*',
    'yarn.lock',
  ],
  keywords: ['cdktf', 'lorex', 'camera', 'object', 'notification'],
  license: 'GPL-3.0-or-later',
  name: 'cdktf-lorex-camera-object-notification',
  publishToPypi: {
    distName: 'cdktf-lorex-camera-object-notification',
    module: 'cdktf_lorex_camera_object_notification',
  },
  publishToGo: {
    moduleName: 'github.com/briankanya/cdktf-lorex-camera-object-notification',
  },
  releaseToNpm: true,
  releaseTrigger: ReleaseTrigger.continuous(),
  repositoryUrl: 'https://github.com/briankanya/cdktf-lorex-camera-object-notification.git',
});

const setup = project.addTask("devenv:setup");
setup.exec("yarn install");
setup.spawn(project.buildTask);

const devContainer = new vscode.DevContainer(project, {
  dockerImage: {
    image: 'mcr.microsoft.com/vscode/devcontainers/typescript-node:16-bullseye',
  },
  vscodeExtensions: [
    'dbaeumer.vscode-eslint',
    'eamodio.gitlens',
    'esbenp.prettier-vscode',
    'github.copilot',
    'golang.go',
    'hashicorp.terraform',
    'ms-vsliveshare.vsliveshare',
    'timonwong.shellcheck',
    'visualstudioexptteam.vscodeintellicode',
  ],
  tasks: [setup],
});

devContainer.synthesize();

const gitpod = new Gitpod(project, {
  dockerImage: devContainer.dockerImage,
  prebuilds: {
    addBadge: true,
    addCheck: true,
    addComment: true,
    addLabel: true,
  },
  tasks: [setup],
  vscodeExtensions: devContainer.vscodeExtensions,
});
gitpod.synthesize();

project.synth();
