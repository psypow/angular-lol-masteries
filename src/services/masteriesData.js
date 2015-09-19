module.exports = function(ngModule){
    ngModule.factory('masteriesData', ['$http', '$q', function ($http, $q) {
        var masteriesDataUrlTemplate = 'http://ddragon.leagueoflegends.com/cdn/$version$/data/$language$/mastery.json';
        var forEach = angular.forEach;

        function getMasteriesStaticData(options) {
            var defer = $q.defer(),
                language = (options && options.language ) || 'en_US',
                version = (options && options.version) || '5.17.1',
            //TODO if version is not defined we should ask to another service for the last version
                masteriesDataUrl;

            masteriesDataUrl = masteriesDataUrlTemplate.replace('$version$', version).replace('$language$', language);

            $http.get(masteriesDataUrl, {cache: true}).success(function (data) {
                defer.resolve(data);
            }).error(errorCallback);

            function errorCallback(data, status, headers, config) {
                defer.reject({status: status, data: data, headers: headers, config: config});
            }

            return defer.promise;
        }

        function convertStaticMasteriesToPlainArray(masteries){
            var plainMasteriesArray = [];
            forEach(masteries.tree, function(masteriesBlock){
                forEach(masteriesBlock, function(masteriesRow){
                    forEach(masteriesRow, function(mastery){
                        plainMasteriesArray.push(mastery);
                    });
                });
            });

            return plainMasteriesArray;
        }

        return {
            getMasteriesStaticData: getMasteriesStaticData,
            convertStaticMasteriesToPlainArray: convertStaticMasteriesToPlainArray
        }
    }]);
};
