// main scripts
import * as hello from './modules/helloThere.js';
import {goodMorning, goodEvening, goodAfternoon} from "./modules/messages.js";

// Let's get this party started.
console.log("Hello from the main app file.");

// Requires and module initializations
hello.helloWorld("NextPage User");

goodMorning("lively person");
goodAfternoon("sleepy person");

// uhm.js
const y = 9;
let x = a => 1 + 3 + a;
let z = x(y);
let q = x(25);

console.log('z = ', z);
console.log('q = ', q);
