describe('MasteriesController', function(){
    var masteriesData, createMasteriesController, $scope;
    var masteriesDataResult = {name:'masteriesData'};

    beforeEach(module('angular-lol-masteries', function($provide){

        $provide.decorator('masteriesData', function($delegate){
            $delegate = jasmine.createSpyObj('masteriesData', ['getMasteriesStaticData']);
            $delegate.getMasteriesStaticData.and.returnValue({
                then:function(fn){
                    return fn(masteriesDataResult);
                }
            });
            return $delegate;
        })
    }));
    beforeEach(inject(function(_masteriesData_, _$httpBackend_, $rootScope, $controller){
        masteriesData = _masteriesData_;
        $scope = $rootScope.$new();
        createMasteriesController = function() {
            return $controller('MasteriesController', {
                '$scope': $scope
            });
        };

    }));

    describe('initialization', function(){
        it('must fill masterySlots with data from masteriesData service when it\'s created', function(){
            createMasteriesController();
            expect(masteriesData.getMasteriesStaticData).toHaveBeenCalled();
            $scope.$digest();
            expect($scope.masterySlots).toBe(masteriesDataResult);
        });
    });

    describe('method', function(){
        var masteriesController;
        beforeEach(function(){
            masteriesController = createMasteriesController();
        });

        describe('getStyle',  function(){
            it('must return a css style with display none if masteriesData parameter is not provided', function(){
                expect(masteriesController.getStyle()).toEqual({display:'none'});
            });

            it('must return a css style with background-position inverted depending on the info of the image', function(){
                expect(masteriesController.getStyle({image:{x:0, y:2}})).toEqual({'background-position': '-0px -2px '});
            });

            describe('sanityCheck', function(){
                describe('of masteryData parameter', function(){
                    it('must throw an error if masteryData is not a valid object', function(){
                        var errorMessage = "masteryData is not a valid object";

                        expect(function(){
                            masteriesController.getStyle(true);
                        }).toThrowError(errorMessage);

                        expect(function(){
                            masteriesController.getStyle({});
                        }).toThrowError(errorMessage);

                        expect(function(){
                            masteriesController.getStyle('a');
                        }).toThrowError(errorMessage);
                    });
                })
            });
        });
    });
});