import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Glyphicon, Grid, Form, FormControl, FormGroup } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerText :  "Welcome to Minerva Program",
      bodyText : "Trying to learn more stuff"
    }
  }
  render() {
    return (
      <div className="App">
        <p> {this.state.headerText} </p>
         <p>This is body text. {this.state.bodyText}</p>
        <Header name="Haridas"/>
        <DataDisplay/>
      </div>
    );
  }
}

export default App;


class Header extends Component {
  render() {
  return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.props.name}</h1>
          
        </header>
    )}
 }

 class DataDisplay extends Component {
   constructor(props){
     super(props)

     this.state = {
       data: [
       {
         "id": 1,
         "name": "Haridas",
         "age": 45
       },
       {
         "id": 2,
         "name": "Nanma",
         "age": 10
       },
       {
         "id": 3,
         "name": "Naan",
         "age": 43
       }]
     }

   }

   render() {
     return(
        <div className="App-intro">
         <Grid>
           <Row className="show-grid">
           <Col xs={6} md={4}>
                 <code>id</code>
                 <code>Name one</code>
                 <code>Name two</code>
                 <code>Age</code>
           </Col>      
           </Row>

           <Row> 
    <Col sm={4}>
      Haridas
    </Col>
    <Col sm={8}>
      Lahari
    </Col>
  </Row>

           
             {this.state.data.map((person, i) => 
               <TableRow key={i} data={person}/> )}
           
         </Grid>
        </div>
    ) 
   }
 }

class TableRow extends Component {
  render() {
  return(

  <Row className="show-grid">
    <Col xs={12} md={8}>
      <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
    </Col>
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
    </Col>
  </Row>
        
    )}
}
