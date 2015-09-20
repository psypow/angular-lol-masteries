module.exports = (function(){
    var lolMasteries = require('./angular-lol-masteries.js');

    require('./services/masteriesData');
    require('./directives/masteries/masteries');
    require('./directives/masteries/masteries.scss');

    return lolMasteries;
})();