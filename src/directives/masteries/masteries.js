module.exports = function(ngModule){
    //TODO missing unit tests
    ngModule.directive('masteries', ['masteriesData', function(masteriesData){
        return {
            replace: true,
            template: require('./masteries.tpl.html'),
            controller:function($scope){
                const masteryClass='mastery',
                    masteryRow='--row',
                    masteryColumn='--column',
                    masteryBlock='--block';

                masteriesData.getMasteriesStaticData().then(function(masteries){
                    $scope.masterySlots = masteriesData.convertStaticMasteriesToPlainArray(masteries);
                });

                $scope.getPositionClasses = (mastery) => {
                    var masteryId = mastery && mastery.masteryId;

                    return masteryId?{
                      [masteryClass + masteryBlock +  masteryId[1] + masteryColumn + masteryId[3]]:true,
                      [masteryClass + masteryRow + masteryId[2]]:true
                    }:'';
                }
            }
        };
    }]);
};