var myVar='text'
let m=123
const c=true  


const pi=3.14
console.log(pi) 
// pi=3.14159 gives error because pi is a constant and cannot be reassigned. To fix this, we can declare pii as a variable using let instead of const.

let pii=3.14
pii=3.14159
console.log(pii)

function myFunction() {
    
    if (true) {
        var myVar='new text'
        let myLet=456
        const myConst=false  
    }
    console.log(myVar) // Output: 'new text' because var is function-scoped and can be accessed outside the block.
    // console.log(myLet) // Error: myLet is not defined because let is block-scoped and cannot be accessed outside the block.
    // console.log(myConst) // Error: myConst is not defined because const is block-scoped and cannot be accessed outside the block.
}
myFunction();