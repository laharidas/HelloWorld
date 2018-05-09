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
         <div className="container">
           <div className="row">
                 <div className="col-sm-4">id</div>
                 <div className="col-sm-4">Name one</div>
                 <div className="col-sm-4">Name two</div>
                 <div className="col-sm-4">Age</div>
           </div>

             {this.state.data.map((person, i) => 
               <TableRow key={i} data={person}/> )}
         </div>
        </div>
    ) 
   }
 }



class TableRow extends Component {
  constructor(props){
    super(props)
    this.activateEdit = this.activateEdit.bind(this)
    this.state = {
      inputDisabled: true,
      formButton: "Edit"
    }
  }
  activateEdit() {
   this.setState({inputDisabled: false})
   this.setState({formButton: 'Save'})
   console.log(' Fun called')
}
  render() {
    return(
        <div className="row">
          <form>
             <div className="col-sm-4">
               <input type="text" placeholder="id"
                value = {this.props.data.id}
                disabled = {this.props.inputDisabled} />
             </div>
             <div className="col-sm-4">
               <input type="text" placeholder="name"
                 value = {this.props.data.name} 
                 disabled = {this.props.inputDisabled} />
                 <button onClick={this.activateEdit}>{this.state.formButton}</button> 
             </div> 

             <div className="col-sm-4">{this.props.data.name}</div>
             <div className="col-sm-4">{this.props.data.age}</div>
           </form>  
        </div>   
        
    )}
}
