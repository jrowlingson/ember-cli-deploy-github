/* jshint node: true */
'use strict';//
// var DeployPluginBase = require('ember-cli-deploy-plugin');
//var GitHubApi = require('github');

module.exports = {

  name: 'ember-cli-deploy-github',

  createDeployPlugin: function(options) {
    var DeployPlugin = DeployPluginBase.extend({
      name: options.name,
      requiredConfig: [], // TODO: jrowlingson - required config
      defaultConfig: {
        willDeploy: function(/* context */) {
          return this._executeGithubHook('willDeploy');
        },

        willBuild: function(/* context */) {
          return this._executeGithubHook('willBuild');
        },

        build: function(/* context */) {
          return this._executeGithubHook('build');
        },

        didDeploy: function(/* context */) {
          return this._executeGithubHook('didDeploy');
        },

        didFail: function(/* context */) {
          return this._executeGithubHook('didFail');
        },

        _executeGithubHook: function(hookName) {
          // no-op
          // TODO: jrowlingson - implement
          this.log('excuting hook' + hookName);
        }
      }
    });
    return new DeployPlugin();
  }
};
