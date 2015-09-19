module.exports = function(ngModule){
    ngModule.directive('masteries', ['masteriesData', function(masteriesData){
        return {
            replace: true,
            template: require('./masteries.tpl.html')
        };
    }]);
};