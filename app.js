const add = require("./module.js");
const animal = require("./secondTest.js");
console.log(add(1,2));

for(let key in animal){
  console.log(key+" : "+animal[key]);
}
