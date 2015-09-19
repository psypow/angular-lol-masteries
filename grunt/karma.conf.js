module.exports = function(config) {
    config.set({
        basePath: '../src/',
        singleRun:false,
        files:[
            '../node_modules/angular/angular.min.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            './main.js',
            './**/*.js',
            './**/*.spec.js'
        ],
        exclude:[

        ],
        frameworks:['jasmine'],
        plugins:['karma-jasmine', 'karma-chrome-launcher']
    });
};