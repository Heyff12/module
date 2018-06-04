import { firstName, lastName, year, multiply } from './profile.js';

function setName(element) {
    element.textContent = firstName + ' ' + lastName;
}

console.log(firstName + ' ' + lastName)
const mul = multiply(2, 3)
console.log(mul)