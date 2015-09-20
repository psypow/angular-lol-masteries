module.exports = function (grunt) {
    console.log("GRUNTFILE");
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        karma:{
            unit: {
                configFile: 'karma.conf.js',
                port: 9999,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'INFO'
            }
        }
    });
};