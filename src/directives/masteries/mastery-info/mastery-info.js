angular.module('angular-lol-masteries').directive('masteryInfo', [function () {
    return {
        restrict: 'E',
        template: require('./mastery-info.tpl.html'),
        scope: {
            masteryInfoData: '=masteryInfoSource',
            masteryRank: '='
        },
        replace: true
    };
}]);

angular.module('angular-lol-masteries').directive('masteryInfoDescription', [function () {
    return {
        restrict: 'A',
        replace:true,
        scope:{
            masteryInfoDescription:'='
        },
        link: function ($scope, iElement, iAttrs) {
            var unWatchDescription = $scope.$watch('masteryInfoDescription', function (description) {
                iElement.html(description);
                unWatchDescription();
            });
        }
    };
}]);