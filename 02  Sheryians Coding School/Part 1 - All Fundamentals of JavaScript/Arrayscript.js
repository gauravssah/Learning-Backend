// Fundamentals of Javascript
// arrays and objects
// functions return 
// async js coding
// foreach map filter find indexof



var arr = [1, 2, 3, 4, 5];

// <---forEach--->
arr.forEach((val) => {
    console.log(val + " Gaurav");
});

// <---map--->
var newarr = arr.map(function (val) {
    return val * 3;
});
console.log(newarr);

// <---forEach--->
var filterArray = arr.filter((val) => {
    if (val >= 3) return true;
});
console.log(filterArray);  // [3, 4, 5]

// <---find--->
var finsAns = arr.find((val) => {
    if (val === 2) return val;
});
console.log(finsAns); // 2