// var x = 5.6 -> 
// if var declaration is out of function, it has a global scope
// if var declaration is inside of function, it belongs to the function

// let x = 5.6 ->
// only for a block scope

// const x = 5.6 ->
// block scope, value cannot be changed after initialization

var x = ['a', 'b', 'c'];
for(var i = 0; i < x.length; i++) {
    console.log("Hello Node.js\t" + x[i])
}