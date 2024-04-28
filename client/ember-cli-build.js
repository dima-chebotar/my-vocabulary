'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    svgJar: {
      sourceDirs: ['public/assets', 'node_modules/@ember-eui/core/vendor/icon'],
    },
  });

  return app.toTree();
};
