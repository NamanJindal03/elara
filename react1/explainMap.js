// /* 
//     Map -> high order funciton?
    
//     high order functions are those 


// */

// const arr = ['a', 'b', 'c', 'd'];

// //we will assume that we have the access to arr in our myMap

// //this is the true polyfill of your map 
// Array.prototype.myMap =  function(cb){
//     let newArr = [];
//     for(let i=0; i< this.length; i++){
//         let returnVal = cb(this[0], i, this);
//         newArr.push(returnVal);
//     }
//     return newArr;
// }

// /* 3 values -> value, index, whole array */
// // const newArr = arr.map((val, index, wholeArr)=>(
// //     // console.log(val);
// //     // console.log(index);
// //     // console.log(wholeArr);
// //     val + 'abcd'
// // ))
// const newArrMy = arr.myMap((val, index, wholeArr)=>(
//     // console.log(val);
//     // console.log(index);
//     // console.log(wholeArr);
//     val + 'abcd'
// ))
// console.log(newArrMy)

// // const myCustom = (val, index, wholeArr) =>{
// //     return val + 1;
// // }

// // const newArr2 = arr.map(myCustom)

// // console.log(newArr)
// // console.log(newArr2)

// /* polyfills?  */



const a = () => {
    console.log('a executed')
}
const b = () => {
    console.log('b executed')

}
const c = () => {
    console.log('c executed')

}
const d = () => {
    console.log('d executed')

}

const arrFuncs = [a(),b(),c(),d()];
console.log(arrFuncs)
// const executeFuncs = (arr) => {
//     for(let i=0; i< arr.length; i++){
//         arr[i]();
//     }
// }

// executeFuncs(arrFuncs);