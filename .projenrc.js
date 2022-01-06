const { cdktf } = require('projen');

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
    '.vscode',
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
  publishToPypi: true,
  releaseToNpm: true,
  releaseTrigger: ReleaseTrigger.continuous(),
  repositoryUrl: 'https://github.com/briankanya/cdktf-lorex-camera-object-notification.git',
});

project.synth();