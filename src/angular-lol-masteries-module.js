var ngModule = angular.module('angular-lol-masteries', []);
module.exports = ngModule;
require('./services/masteriesData')(ngModule);
require('./directives/masteries/masteries')(ngModule);