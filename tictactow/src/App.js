// import { Button } from 'reactstrap';
import { FaBeer } from "react-icons/fa"; /* font awesome */
import React, {useState} from 'react';
import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap'
import './App.css'
import Icon from "./Icon";

let itemArray = new Array(9).fill("empty");
function App() {
  const [isCross, setIsCross] = useState(false) //the first player will have O as the symbol
  // const [isCircle, setIsCircle] = useState(true)
  const [winMessage, setWinMessage] = useState("");
  // const [itemArray, setItemArray] = useState(new Array(9).fill("empty")) /* 9 fields */
  /* optimization point */

  /* 

  */
  /* map */

  
  function changeItem(index){
    //index = 0;

    //['circle', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
/* batching  */
    if(winMessage){
      alert('winner is already declared');
      return;
    }
    console.log("inside change item",index)


    if(itemArray[index] === "empty"){
      itemArray[index] = isCross ? "cross" : "circle";
      setIsCross(!isCross); /* 
        isCross = true => is is the turn of cross =>
        cross = true => !true => false

        iscross = false => !false => true
      */
    }
    else{
      alert('already filled value');
      return;
    }
    checkIsWinner();

  }
  function reset(){
    setIsCross(false);
    setWinMessage("");
    itemArray = new Array(9).fill("empty");
  }

  function checkIsWinner (){
    if(
      itemArray[0] === itemArray[1] &&  
      itemArray[1] === itemArray[2] &&
      itemArray != "empty"
    ){
      setWinMessage(`winner declared ${isCross? 'cross': 'circle'}`)
    }
  }
  return (
    <>
    <Container> {/* container is boostrap feature which adds left and right margin  */}
      <h1>CUSTOM TIC TAC TOE</h1>
      {winMessage ? 
        <div className="mb-2">
          <h3>{winMessage}</h3>
          <Button onClick={reset}>Reset the Game</Button>
        </div>
      :
        <h3> {isCross ? "cross's" : "circle's"} turn</h3>
      }
      
      {/*  */}
      <div className="grid">
        {
          itemArray.map((item, index)=>( /* empty */
            <div color="warning" key={index} onClick={()=>changeItem(index)} style={{backgroundColor:'yellow'}}>
              <div className="box">
                  <Icon name={item}/>
              </div>
            </div>
          ))
        }
        
      </div>
    </Container>
    </>
  );
}

export default App;
