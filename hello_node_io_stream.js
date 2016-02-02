// source : https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input


var util = require('util');

function done() {
    console.log('Now that process.stdin is paused, there is nothing more to do.');
process.exit();
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (text) {
    console.log('received data:', util.inspect(text));
    if (text === 'quit\n') {
      done();
    }
});
