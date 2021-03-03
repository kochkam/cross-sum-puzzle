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




class Board extends React.Component{


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




    







    return(
      <Form >
      {rows}
      </Form>







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
