// source : https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input
var return_string1 = "NOT_SET";

process.stdin.setEncoding('utf8');
var util = require('util');
    
process.stdin.on('data', function (text_input) {
    console.log('received data:', util.inspect(text_input));
    return_string1=util.inspect(text_input);
    process.exit();
});

console.log(return_string1);
