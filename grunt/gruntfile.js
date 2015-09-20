module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        karma:{

            unit: {
                configFile: 'karma.conf.js',
                port: 9999,
                singleRun: true,
                browsers: ['Chrome'],
                logLevel: 'ERROR'
            }
        }
    });
};