angular.module('angular-lol-masteries').directive('staticMasteries', ['masteriesData', 'masterySprite', function (masteriesData, masterySprite) {
    var forEach = angular.forEach, element = angular.element;
    return {
        replace: true,
        scope:{
            summonerMasteries:'='
        },
        template:'<div class="masteries"></div>',
        link:function($scope, iElement){
            $scope.$watch('summonerMasteries', function(summonerMasteries){
                if(summonerMasteries){
                    masteriesData.getMasteriesStaticData().then((masterySlots) => {
                        buildTreesHMTL(iElement, masterySlots, $scope.summonerMasteries);
                    });
                }
            });
        }
    };

    function buildTreesHMTL(targetElement, masterySlots, summonerMasteries) {
        var rootDiv = angular.element('<div/>');

        forEach(masterySlots.tree, function(tree){
            var treeDiv = element('<div class="masteries-masteryTree"/>');

            forEach(tree, function(row){
                var rowDiv = element('<div class="masteries-masteryTree-row" />');
                treeDiv.append(rowDiv);

                forEach(row, function(masterySlot){
                    var wrapperDiv = element('<div class="mastery" />');
                    var slotDiv = element('<div class="mastery-slot" />');

                    if(masterySlot){
                        var masteryId = masterySlot.masteryId;
                        var masteryData = masterySlots.data[masteryId];
                        var slotSpriteStyle = masterySprite.getSpriteStyle(masteryData);

                        slotDiv.css(slotSpriteStyle);
                        wrapperDiv.append(slotDiv);

                        var summonerMastery = summonerMasteries[masteryId];
                        if(summonerMastery){
                            var summonerMasteryDiv = element('<div class="mastery-slot mastery-slot--summoner" />');
                            summonerMasteryDiv.css(slotSpriteStyle);
                            summonerMasteryDiv.text(summonerMastery.rank);

                            var masteryInfoDiv = element('<div class="mastery-info" />');

                            masteryInfoDiv.append(element('<div class="mastery-info-title" />').text(masteryData.name));
                            masteryInfoDiv.append(element('<div class="mastery-info-description" />').text(masteryData.description[summonerMastery.rank-1]));
                            wrapperDiv.append(summonerMasteryDiv).append(masteryInfoDiv);
                        }
                    }

                    rowDiv.append(wrapperDiv);
                });
            });

            rootDiv.append(treeDiv);
        });

        targetElement.append(rootDiv);
    }
}]);