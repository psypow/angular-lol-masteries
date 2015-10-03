angular.module('angular-lol-masteries').controller('MasteriesController', function($scope, masteriesData){
    var isDefined = angular.isDefined;
    masteriesData.getMasteriesStaticData().then((masteries) => {
        $scope.masterySlots = masteries;
    });

    this.getStyle = (masteryData) => {
        sanityCheckMasteryData(masteryData);
        return masteryData && isValidMasteryDataObject(masteryData) ?{
            'background-position': '-'+masteryData.image.x+'px '+'-'+masteryData.image.y+'px '
        }:{
            'display':'none'
        };
    };

    function isValidMasteryDataObject(masteryData){
        return masteryData.image && isDefined(masteryData.image.x) && isDefined(masteryData.image.y);
    }

    function sanityCheckMasteryData(masteryData){
        if(masteryData){
            if(!isValidMasteryDataObject(masteryData)){
                throw new Error('masteryData is not a valid object', masteryData);
            }
        }
    }
});