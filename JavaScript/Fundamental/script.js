// variable
// container - store values / data

// var   - (old variable to store data) by ES-5 (this is for window)

// let      - (ES -6)
// const    - (ES -6)


// var let const
// Declaration and Innitialization
// Scope of variable


var a;          // Declaration

a = 20          // Intialize   (first value)

var a = 30      // declare and intialize  (redeclare)

let b = 20

b = 10          //  reassignment

const india = "bharat"

// india = "20"          // (reassignment)


// words and keywords

// var nott = 20


// SCOPE (GLOBAL, BLOCK, FUNCTION)




// let glb = 100
// Hoisting (var) - (move declaration to top of the scope)
// divide this line into two parts - (first part goes up, second part goes down)
// let glb = undefined;
// let glb;
// glb = 100

// TDZ (Temporal Dead Zone)


// console.log(glb);


// var glb = 100;
// console.log(say);
console.log(sir);
function myworld(){
    let say = "hello"
    console.log(say);
    console.log(name);
    var sir = "Dhiraj"
    if(true){
        const name = "bhavyata"
        console.log(name);
    }
}



