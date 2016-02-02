// Source : http://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json

// (Modified for understanding, experimentation, and my own use...)

function whatIsIt(object) {
    var stringConstructor = "test".constructor;
    var arrayConstructor = [].constructor;
    var objectConstructor = {}.constructor;

    if (object === null) {
        return "null";
    }
    else if (object === undefined) {
        return "undefined";
    }
    else if (object.constructor === stringConstructor) {
        return "String";
    }
    else if (object.constructor === arrayConstructor) {
        return "Array";
    }
    else if (object.constructor === objectConstructor) {
        return "Object";
    }
    else {
        return "don't know";
    }
}

function test_something(thing_to_test) {
    console.log(thing_to_test);
    if (thing_to_test) {
        for (var i=0, len = thing_to_test.length; i < len; i++) {
            console.log(whatIsIt(thing_to_test[i]));
        }
    }
}

var testSubject1 = ["string", [1,2,3], {foo: "bar"}, 4];
var testSubject2 = "hello";
var testSubject3;

test_something(testSubject1);
test_something(testSubject2);
test_something(testSubject3);
