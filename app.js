const add = require("./module.js");
const animal = require("./secondTest.js");
console.log(add(1,2));

let array =[];
for(let key in animal){
  array.push(key+" : "+animal[key]);
}
console.log(array.join(" "));