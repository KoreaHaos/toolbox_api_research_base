// More involved access..

// ToDo Clean up and make more modular

// Source : http://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
// (Heavily modified for understanding, experimentation, and my own use...)

var fs = require('fs');
var path = require('path');

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function(file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

function display_thingy(thingy_to_display) {

    if ((typeof thingy_to_display) === 'string') {
        // ToDo: figure this out...
    }
    else if ((typeof array_to_display) === 'object') {
        for (var i = 0; i < thingy_to_display.length; i++) {
            display_thingy(thingy_to_display[i]);
        }
    }
    else if (thingy_to_display.constructor === Array) {
        for (var i = 0; i < thingy_to_display.length; i++) {
            display_thingy(thingy_to_display[i]);
        }
    }
    else {
        var string_to_add = JSON.stringify(thingy_to_display);
        console.log(thingy_to_display);
    }
}

var club_location = "../secret_club_haos";

function check_if_directory_exists(directory) {  
  try {
    fs.statSync(directory);
    return true;
  } catch(error) {
    return false;
  }
}

if (check_if_directory_exists(club_location)) {

    var directories_array = getDirectories(club_location);
    var config = [];

    for (var i = 0; i < directories_array.length; i++) {
        var require_string = club_location + "/" + directories_array[i] + "/" + "config.js";
        config[i] = require(require_string);
    }

    display_thingy(config);
}
else {
    console.log("Can not find the club!");
}
