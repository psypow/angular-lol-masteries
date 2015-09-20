describe('masteriesData', function(){
    var masteriesData, $httpBackend, $q, $rootScope;
    var masteriesDataResult = {name:'masteriesData'};
    beforeEach(module('angular-lol-masteries'));
    beforeEach(inject(function(_masteriesData_, _$httpBackend_, _$q_, _$rootScope_){
        masteriesData = _masteriesData_;
        $httpBackend = _$httpBackend_;
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    describe('getMasteriesStaticData public method', function(){
        it('should return a promise from calling an url with cache', function(){
            var result = null;

            $httpBackend.expectGET('http://ddragon.leagueoflegends.com/cdn/5.17.1/data/en_US/mastery.json').respond(masteriesDataResult);
            masteriesData.getMasteriesStaticData().then(function(data){
                result = data;
            });

            $httpBackend.flush();

            expect(result).toEqual(masteriesDataResult);

            masteriesData.getMasteriesStaticData().then(function(){
                result = {name:'2'};
            });

            $rootScope.$digest();

            expect(result).toEqual({name:'2'});
        });

        it('should return a promise that will be rejected if the request fails', function(){
            var result = null;

            $httpBackend.expectGET('http://ddragon.leagueoflegends.com/cdn/5.17.1/data/en_US/mastery.json').respond(404);
            masteriesData.getMasteriesStaticData().then(function(data){
                result = data;
            }, function (errorData){
                result = errorData;
            });

            $httpBackend.flush();

            expect(result.status).toBe(404);

        });

        describe('options parameter', function(){
            it('should be able to define version', function(){
                var result = null;

                $httpBackend.expectGET('http://ddragon.leagueoflegends.com/cdn/anyVersion/data/en_US/mastery.json').respond(masteriesDataResult);
                masteriesData.getMasteriesStaticData({version:'anyVersion'}).then(function(data){
                    result = data;
                });

                $httpBackend.flush();

                expect(result).toEqual(masteriesDataResult);
            });

            it('should be able to define language', function(){
                var result = null;

                $httpBackend.expectGET('http://ddragon.leagueoflegends.com/cdn/5.17.1/data/anyLanguage/mastery.json').respond(masteriesDataResult);
                masteriesData.getMasteriesStaticData({language:'anyLanguage'}).then(function(data){
                    result = data;
                });

                $httpBackend.flush();

                expect(result).toEqual(masteriesDataResult);
            });
        });
    });
});