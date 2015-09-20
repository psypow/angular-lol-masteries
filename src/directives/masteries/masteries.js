angular.module('angular-lol-masteries').directive('masteries', ['masteriesData', function (masteriesData) {
    return {
        replace: true,
        template: require('./masteries.tpl.html'),
        scope:{
            summonerMasteries:'='
        },
        controller: ($scope) => {
            masteriesData.getMasteriesStaticData().then((masteries) => {
                $scope.masterySlots = masteries;
            });

            $scope.getStyle = (masteryData) => {
                return masteryData?{
                    'background-position': '-'+masteryData.image.x+'px '+'-'+masteryData.image.y+'px '
                }:{
                    'display':'none'
                };
            };
        }
    };
}]);