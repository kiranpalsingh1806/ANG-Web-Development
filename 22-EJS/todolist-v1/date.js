//jshint esversion:6

module.exports.getDate = getDate;

function getDate() {
    
    let today = new Date();
    var options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = function() {
    
    let today = new Date();
    var options = {
        weekday : "long"
    };

    return today.toLocaleDateString("en-US", options);
}
