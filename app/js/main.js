'use strict';

require('babel-polyfill');

var _hello = require('./hello');

(0, _hello.greet)('Scott').then(function (greeting) {
    document.getElementById('container').innerHTML += greeting;
});

document.getElementById('container').innerHTML = 'I am greeting: ';