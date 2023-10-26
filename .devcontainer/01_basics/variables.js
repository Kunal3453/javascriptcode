var a=3
let b=4
const c=5
a=4
console.log(a);
console.log(b);
// var is not used due to functional scope 
// example 
// function exampleWithVar() {
//     if (true) {
//       var x = 10;
//     }
  
//     console.log(x); // Outputs 10, even though x was declared inside the if block
//   }
  
//   exampleWithVar();
  
//   // Using let
//   function exampleWithLet() {
//     if (true) {
//       let y = 20;
//     }
  
//     // Uncommenting the next line will result in a ReferenceError: y is not defined
//     // console.log(y);
//   }
  
//   exampleWithLet();
// the exampleWithVar function, the variable x is declared using var inside
//    the if block, but it is accessible outside the block. This is because var has function-level scope, so x is function-scoped.

// In the exampleWithLet function, the variable y is declared using let inside
//  the if block, but if you try to access it outside the block, you'll get a 
//  ReferenceError. This is because let has block-level scope,
//  so y is block-scoped and not accessible outside the block.
console.table([a,b,c]);