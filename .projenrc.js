const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Brian',
  authorAddress: 'briankanya@gmail.com',
  cdktfVersion: '0.4.0',
  defaultReleaseBranch: 'main',
  name: 'cdktf-lorex-camera-object-notification',
  repositoryUrl: 'https://github.com/briankanya/cdktf-lorex-camera-object-notification.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();