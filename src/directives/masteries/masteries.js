module.exports = function(ngModule){
    //TODO missing unit tests
    ngModule.directive('masteries', ['masteriesData', function(masteriesData){
        return {
            replace: true,
            template: require('./masteries.tpl.html'),
            controller: ($scope) =>{
                masteriesData.getMasteriesStaticData().then((masteries) =>{
                    $scope.masterySlots = masteries;
                });
            }
        };
    }]);
};