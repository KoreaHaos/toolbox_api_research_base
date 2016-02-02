// ToDo Clean up and make more modular

// Source : http://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
// (Heavily modified for understanding, experimentation, and my own use...)


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

function check_if_directory_exists(directory) {  
  try {
    fs.statSync(directory);
    return true;
  } catch(error) {
    return false;
  }
}

function display_clubs_rooms(location_of_club) {
    
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
}

function modify_vip_passes(object_to_add_passes_to) {
    console.log("\nModify VIP Passes!\n");

    //console.log(object_to_add_passes_to);
    //console.log(object_to_add_passes_to);
}

/*
* The arguments are stored in process.argv

Here is the specification form http://nodejs.org/docs/latest/api/process.html#process_process_argv

process.argv is an array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

Source : http://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-node-js
*/



/*
____   ____.___          _____    _________ _________                                
\   \ /   /|   |_____   /  _  \  /   _____//   _____/ ______________  __ ___________ 
 \   Y   / |   \____ \ /  /_\  \ \_____  \ \_____  \_/ __ \_  __ \  \/ // __ \_  __ \
  \     /  |   |  |_> >    |    \/        \/        \  ___/|  | \/\   /\  ___/|  | \/
   \___/   |___|   __/\____|__  /_______  /_______  /\___  >__|    \_/  \___  >__|   
               |__|           \/        \/        \/     \/                 \/       

* Functionality starts here!

*/
var club_location = "../secret_club_haos";
console.log("\nWelcome to the club!\n");
var fs = require('fs');
var path = require('path');

var arg_to_handle = [];

process.argv.forEach(function (val, i, array) {
  if (i > 1) {
      arg_to_handle[i-2] = val;
  }
});

for (var i = 0; i < arg_to_handle.length; i++) {
    club_location = arg_to_handle[i];
}

var config_file_name = "config.js";
var require_location = club_location + "/" + config_file_name;

var config_to_add = require(require_location);
var config_to_adds_name = config_to_add.room_name;

var master_config = {};

master_config[config_to_adds_name] = config_to_add;

var vip_pass_set = {};

vip_pass_set['VIP_ID'] = "VIP_ID_NOT_SET";
vip_pass_set['VIP_PASSPHRASE'] = "VIP_SECRET_NOT_SET";

console.log(vip_pass_set);
modify_vip_passes(vip_pass_set);
console.log(vip_pass_set);



master_config[config_to_adds_name]["VIP_PASS_SET"] = vip_pass_set;



console.log(master_config);
