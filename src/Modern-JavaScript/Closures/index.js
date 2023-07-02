// Closures

// closure is an inner function that has access to the outer function's variables and parameters. It allows the inner function to access and manipulate the outer function's variables, even after the outer function has returned.

const sum = (a) => {
console.log('hello', 2)
var c = 10;
return function(b) // anonymous function
{
    return a + b + c // a = 20 , b = 30 , c 10 , all values are calling 
    // alexi scope in js
}
}
const store = sum(30) // calling 

console.log(store(20)) // anonymous function   store in  store var



// Example 2

const sum2 = (a,b,c) => {

    return {
        getSumTwo:function(){
            return a + b
        },
        getSumThree:function(){
            return a + b + c
        }
    }
}

const store2 =sum2(2,3,4)
console.log(store2.getSumTwo()) //   output  5 
console.log(store2.getSumThree()) // output  8




// Example 3

function parent() {
    var house = 'WhiteHouse';
   
    function child() {   
        var car = 'Tesla'; 
        console.log('I have:', house, car);
    }
   
    return child;
}
var legacy = parent();
console.log(typeof(legacy)); //legacy is of type function
legacy(); // I have: WhiteHouse Tesla