import {firstName, lastName, year} from './util.js';
import $ from 'jquery'
$('body').css('background', 'red')
console.log(firstName,lastName,"====",year);
function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}