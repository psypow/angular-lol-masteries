angular.module('angular-lol-masteries').directive('masteries', ['masteriesData', function (masteriesData) {
    return {
        replace: true,
        template: require('./masteries.tpl.html'),
        scope:{
            summonerMasteries:'='
        },
        controller: 'MasteriesController',
        controllerAs:'masteriesController'
    };
}]);