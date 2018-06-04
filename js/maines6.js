'use strict';

var _profile = require('./profile.js');

function setName(element) {
    element.textContent = _profile.firstName + ' ' + _profile.lastName;
}

console.log(_profile.firstName + ' ' + _profile.lastName);
var mul = (0, _profile.multiply)(2, 3);
console.log(mul);