function add(a,b){
  return a+b;
}
const animal ={
  zoo : ["사자", "호랑이", "코끼리"],
  home : ["강아지","고양이","고슴도치"]
};
console.log(add(1,2));

let array =[];
for(let key in animal){
  array.push(animal[key]);
}
console.log(array);