angular.module('angular-lol-masteries').factory('masterySprite', [function(){
    var isDefined = angular.isDefined;
    /**
     *
     * @param masteryData
     * @returns {*}
     */
    function getSpriteStyle(masteryData){
        sanityCheckMasteryData(masteryData);

        return masteryData && isValidMasteryDataObject(masteryData) ? {
            backgroundPosition: '-' + masteryData.image.x + 'px ' + '-' + masteryData.image.y + 'px '
        } : {
            display: 'none'
        };
    }

    return {
        getSpriteStyle:getSpriteStyle
    };

    function isValidMasteryDataObject(masteryData) {
        return masteryData.image && isDefined(masteryData.image.x) && isDefined(masteryData.image.y);
    }

    function sanityCheckMasteryData(masteryData) {
        if (masteryData) {
            if (!isValidMasteryDataObject(masteryData)) {
                throw new Error('masteryData is not a valid object', masteryData);
            }
        }
    }
}]);