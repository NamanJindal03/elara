import React, {useState} from "react";
/* COunter ->  0*/
/* global area */
let count3 = 0; //retained 11
function App() {
  // console.log(useState(0));
  let [count2, setCount2] = useState(0); //It is the ccapability of the hooks 
  //that it retains the value of the count even when we are rerendering.

  let count = 10; //20 reinitialize => 10
  console.log(count);
  // console.log(count) //0
  // console.log(setCount) //function defination
  // function increase(){
  //   console.log('increase')
  // }
  return (
    <>
      <div>Count is <span> {count} </span></div>

      <button onClick={() =>{
        count = count +1;
        console.log('count1', count)
        // setCount(count + 1)
      }}> Increase inside APP count1</button>

      {/* <button onClick={() =>{
        count = count -1;
        console.log(count)
        // setCount(count - 1)
      }}> Decrease</button>

      <button onClick={() =>{
        count = 0;
        console.log(count)
        // setCount(0)
      }}> Reset</button> */}

      <br />
      <br />
      <br />
      <div>Count of counter 2 is <span> {count2} </span></div>

      <button onClick={() =>{
        // count = count +1;
        console.log('count2',count2)
        setCount2(count2 + 1)
      }}> Increase Proper useState count2</button>
{/* 
      <button onClick={() =>{
        // count = count -1;
        console.log(count2)
        setCount2(count2 - 1)
      }}> Decrease</button>

      <button onClick={() =>{
        // count = 0;
        console.log(count2)
        setCount2(0)
      }}> Reset</button> */}
      {/* increase() */}
      <br />
      <br />
      <br />
      <br />
      <div>Count of counter 3 is <span> {count3} </span></div>
      <button onClick={() =>{
        count3 = count3 +1;
        console.log('count3', count3)
        // setCount(count + 1)
      }}> Increase Outside Count3</button>

      {count3 > 20 ? (<button>Reset</button>) : ''}
      {/*  */}
      {/* we cannot use if and else block inside jsx */}
      {/* ternary operator  */}
    </>
  );
}
/* Rerendering -> */
export default App;
