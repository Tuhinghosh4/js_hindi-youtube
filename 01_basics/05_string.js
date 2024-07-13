const name = "Tuhin"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('tuhin_hcc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  tuhin  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tuhin.com/tuhin%20ghosh"

console.log(url.replace('%20','-'));

console.log(url.includes("ohjkgfgtft"));

console.log(gameName.split('_'));