module.exports = (function(){
    var lolMasteries = require('./angular-lol-masteries.js');

    require('./services/masteriesData');

    require('./directives/masteries/masteries');
    require('./directives/masteries/MasteriesController/MasteriesController');
    require('./directives/masteries/masteries.scss');
    require('./directives/static-masteries/static-masteries');
    require('./directives/masteries/mastery-info/mastery-info');

    require('./directives/masteries/mastery-sprite/mastery-sprite');

    return lolMasteries;
})();