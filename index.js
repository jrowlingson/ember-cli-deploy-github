/* jshint node: true */
'use strict';//
var DeployPluginBase = require('ember-cli-deploy-plugin');
var GitHubApi = require('./lib/github');

module.exports = {

  name: 'ember-cli-deploy-github',

  createDeployPlugin: function(options) {
    var DeployPlugin = DeployPluginBase.extend({

      name: options.name,

      requiredConfig: [], // TODO: jrowlingson - required config

      defaultConfig: {
        build: function(/* context */) {
          this.log('hello!!!');
          this._initGitHubApi();
        }
      },

      willDeploy: function(/* context */) {
        return this._executeGithubHook('willDeploy');
      },

      willBuild: function(/* context */) {
        return this._executeGithubHook('willBuild');
      },

      build: function(/* context */) {
        return this._executeGithubHook('build');
      },

      didBuild: function(/* context */) {
        return this._executeGithubHook('didBuild');
      },

      willUpload: function(/* context */) {
        return this._executeGithubHook('willUpload');
      },

      upload: function(/* context */) {
        return this._executeGithubHook('upload');
      },

      didUpload: function(/* context */) {
        return this._executeGithubHook('didUpload');
      },

      willActivate: function(/* context */) {
        return this._executeGithubHook('willActivate');
      },

      activate: function(/* context */) {
        return this._executeGithubHook('activate');
      },

      didActivate: function(/* context */) {
        return this._executeGithubHook('didActivate');
      },

      didDeploy: function(/* context */) {
        return this._executeGithubHook('didDeploy');
      },

      didFail: function(/* context */) {
        return this._executeGithubHook('didFail');
      },

      _executeGithubHook: function(hookName) {

        //todo github api

        var hook = this.readConfig(hookName);
        if (hook) {
          return hook.call(this);
        }
      },

      _initGitHubApi: function() {
        var github = new GitHubApi();

        github.github.user.show({ user: "jrowlingson" }, function(err, res) {
          this.log(JSON.stringify(res));
          this.log(JSON.stringify(err));
        });
      }

    });

    return new DeployPlugin();
  }
};
