import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import checkerArray from './array';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'




class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    valid : "Neutral"
    }
  }
 
  checkColumn(colSum,id){
    var validAns = ["1","2","3","4","5","6","7","8","9"];
    var ans = parseInt(colSum)
    var total = 0;
    var newindex = parseInt(id.id) + 8
    if (newindex > 72) {
      return true
    }
    id = document.getElementById(newindex.toString())
    if (id.className == "darksquare custom-select") {
      return true; 
    }

    while (id.className != "darksquare custom-select" && newindex < 73) {
      if (validAns.includes(id.value)) {
      validAns.splice(validAns.indexOf(id.value),1)
      total = total + parseInt(id.value)
      newindex = parseInt(id.id) + 8
      if (newindex < 73) {
        id = document.getElementById(newindex.toString())}
      }
      else return false; 
    }
    if (total.toString() != colSum) {
      return false
    }
    return true
  }

  checkRow(rowSum, id) {
    var validAns = ["1","2","3","4","5","6","7","8","9"];
    var ans = parseInt(rowSum)
    var total = 0;
    var newindex = parseInt(id.id) + 1
    if (newindex > 72) {
      return true
    }
    id = document.getElementById(newindex.toString())
    if (id.className == "darksquare custom-select") {
      return true; 
    }

    while (id.className != "darksquare custom-select" && newindex < 73) {
      if (validAns.includes(id.value)) {
      validAns.splice(validAns.indexOf(id.value),1)
      total = total + parseInt(id.value)
      newindex = parseInt(id.id) + 1
      if (newindex < 73) {
        id = document.getElementById(newindex.toString())}
      }
      else return false; 
    }
    if (total.toString() != rowSum) {
      return false
    }
    return true


  }


checkSolution(){

  for (let index = 1; index < 73; index++) {
    var id = document.getElementById(index.toString())
    var correct = true; 
    var altcorrect = true;
    if (id.className === "darksquare custom-select" && id.value != "") {
      var answer = id.value;
      var one = answer.split("\\")
      if (one[0] == "") {
          correct = this.checkRow(one[1],id)
        }
     
      else if(one[1] === "" && one[0] !== ""){
        correct = this.checkColumn(one[0],id);
      }
      else{
        correct = this.checkColumn(one[0],id);
        altcorrect = this.checkRow(one[1],id)
      }
      if (correct === false || altcorrect === false) {
        return false
      }
    }
    
  }
  return true;

}



validate(event){
  console.log("working")
  event.preventDefault(); 
  if (this.checkSolution()) {
    this.setState({valid: "True"})
    
  }
  else {
    this.setState({valid: "False"})}


}

  renderBlankSquare(i, title = ""){
    return(
      <Form.Control as="select" disabled className= 'darksquare' id={i}custom>
        <option value={title}>{title}</option>

        </Form.Control>)
  }
  
  renderSquareAlt(i){
    return(
        <Form.Control as="select" size="lg"className= 'square' id={i}custom>
        <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>          
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>  
        </Form.Control>
    )
  }


  render(){
    let anscount = 0; 
    let counter = 1;
    let rows = [];
    var cells = []
    var status; 

    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1; 
    cells.push(this.renderBlankSquare(counter,"4\\"))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"12\\"))
    counter = counter + 1; 
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1; 
    cells.push(this.renderBlankSquare(counter,"36\\"))
    counter = counter + 1; 
    cells.push(this.renderBlankSquare(counter,"6\\"))
    counter = counter + 1; 
    cells.push(this.renderBlankSquare(counter,"8\\"))
    counter = counter + 1; 
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;  
    rows.push(<Form.Row className='row'>{cells}</Form.Row>)
    cells = []
    cells.push(this.renderBlankSquare(counter,"\\7"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"21\\11"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    rows.push(<Form.Row className='row'>{cells}</Form.Row>)
    cells = []
    cells.push(this.renderBlankSquare(counter,"\\36"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    rows.push(<Form.Row className='row'>{cells}</Form.Row>)
    cells = []
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"\\14"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    rows.push(<Form.Row className='row'>{cells}</Form.Row>)
    cells = []
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"\\6"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"16\\"))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    rows.push(<Form.Row className='row'>{cells}</Form.Row>)
    cells = []
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"\\5"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    rows.push(<Form.Row className='row'>{cells}</Form.Row>)
    cells = []
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"8\\"))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"14\\14"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"12\\"))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"4\\"))
    counter = counter + 1;
    rows.push(<Form.Row className='row'>{cells}</Form.Row>)
    cells = []
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"\\35"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    rows.push(<Form.Row className='row'>{cells}</Form.Row>)
    cells = []
    cells.push(this.renderBlankSquare(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"\\9"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderBlankSquare(counter,"\\4"))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    cells.push(this.renderSquareAlt(counter))
    counter = counter + 1;
    rows.push(<Form.Row className='row'>{cells}</Form.Row>)
    if (this.state.valid == "False") {
      status = "Invalid Solution"
    }
    else if(this.state.valid == "True") { 
      status = "Correct"}
    else {
      status = ""
    }


    







    return(
      <div>
      <Form key="main"onSubmit={this.validate.bind(this)} >
      {rows}
      <Button type="submit" variant="primary">Check Solution</Button>
      </Form>
      <div>{status}</div>
      </div>
    







    )

  }


}





class Game extends React.Component {
  render() {
    return (
      <div className="game">
      <br></br>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game
