angular.module('angular-lol-masteries').directive('masteryInfo', [function () {
    return {
        restrict: 'E',
        template: require('./mastery-info.tpl.html'),
        scope: {
            masteryInfoData: '=masteryInfoSource'
        },
        replace: true
    };
}]);

angular.module('angular-lol-masteries').directive('masteryInfoDescription', [function () {
    return {
        restrict: 'A',
        replace:true,
        link: function ($scope, iElement) {
            var unWatchDescription = $scope.$watch('masteryInfoDescription', function (description) {
                iElement.html(description);
                unWatchDescription();
            });
        }
    };
}]);