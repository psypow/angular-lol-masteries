module.exports = function(config) {
    config.set({
        basePath: '../src/',
        singleRun:true,
        files:[
            '../node_modules/angular/angular.min.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            './**/*.js',
            './**/*.spec.js'
        ],
        exclude:[
            '*-module.js'
        ],
        frameworks:['jasmine'],
        plugins:['karma-jasmine', 'karma-firefox-launcher', 'karma-mocha-reporter'],
        reporters: ['mocha']
    });
};