.pragma library;

function ago(epoch) {
    // Returns '<delta> [seconds|minutes|hours|days] ago' string given an epoch

    var now = new Date().getTime() / 1000;
    var delta = now - epoch;

    if(delta < 60) {
        if (delta <= 1) {
            return 1 + " " + qsTr("second ago")
        } else {
            return Math.floor(delta) + " " + qsTr("seconds ago")
        }
    } else if (delta >= 60 && delta <= 3600) {
        if(delta >= 60 && delta < 120){
            return 1 + " " + qsTr("minute ago")
        } else {
            return parseInt(Math.floor(delta / 60)) + " " + qsTr("minutes ago")
        }
    } else if (delta >= 3600 && delta <= 86400) {
        if(delta >= 3600 && delta < 7200) {
            return 1 + " " + qsTr("hour ago")
        } else {
            return parseInt(Math.floor(delta / 60 / 60)) + " " + qsTr("hours ago")
        }
    } else if (delta >= 86400){
        if(delta >= 86400 && delta < 172800) {
            return 1 + " " + qsTr("day ago")
        } else {
            var _delta = parseInt(Math.floor(delta / 24 / 60 / 60));
            if(_delta === 1) {
                return 1 + " " + qsTr("day ago")
            } else {
                return _delta + " " + qsTr("days ago")
            }
        }
    }
}