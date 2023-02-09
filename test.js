// const randomFunc = () => {
//     console.log()
// }

function randomNormalFunc () {
    console.log('normal function') //not to be told
    //return undefined
}

console.log(randomNormalFunc()) //what output?

const arrFunc = () => {
    return (10 + 2)
}; //return 

console.log(arrFunc()) //output?

const arrFunc2 = () => {
    20;
}
console.log(arrFunc2())

//in js passing 
//rest operator spread  ... ...
const arrowFunc3 = (...plan) => plan;

console.log(arrowFunc3(90)) //output?

let arr = [1,2,3,4];
// let arr2 = [10,20,40];

const arr3 = [ ...arr ]; //
console.log(arr3); //deep copy 

// //shallow copy vs deep copy? //deeply nested deep copy
// let arr10 = [1,2,3,4, ['a', 'b', 'c']];


let arr4 = arr;  //shallow copy
// arr4 only takes the reference
arr4.push(100);
console.log(arr); //?
console.log(arr4); //?

arr3.push(100000);
console.log(arr);
console.log(arr3)

//shallow copy

let ar1 = [1,2,3,4, ['a', 'b', 'c']]
let deepCopy = [...ar1];
deepCopy[4].push('play');
deepCopy.push(5)
console.log(ar1);
console.log(deepCopy)

//lodash -> 
//recursive funtion -> check 

//
//Array.isArray() -> call recursive funciton again