var obj = {
    name: "Gaurav",
    age: 45
}

console.log(obj.name);     // Gaurav
console.log(obj['name']);  // Gaurav
console.log(obj.age);      // 45 
obj.age = 22;
console.log(obj.age);      // 22

Object.freeze(obj);
obj.age = 92;
console.log(obj.age);      // 22
