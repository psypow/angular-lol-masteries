module.exports = function (grunt) {
    console.log("-- GRUNTFILE LOADED --");
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        karma:{
            unit: {
                configFile: 'karma.conf.js',
                port: 9999,
                singleRun: true,
                browsers: ['Chrome'],
                logLevel: 'INFO'
            }
        }
    });
};
