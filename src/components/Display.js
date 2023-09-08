import React, { Component }  from 'react' ;

import ValidationService from "../services/ValidationService";


// CSS Styles for active Pad
const defaultTheme = {
  backgroundColor: 'orange',
  color: '#f1fa8c'
};
  

  const UserContext = React.createContext();
// // CSS Style for inactive Pad
// const inactivePad = {
//   backgroundColor: '#44475a',
//   color: '#8be9fd'
// };

//  Pad Component
export default class Display extends Component {

  constructor(props){
    super(props);
    this.state = {
      padStyle : defaultTheme
    }
    // this.display = 'Showing something';
    this.display = ValidationService.firstValidationMethod();
    // this.playClip = this.playClip.bind(this);
    // this.handleKeyDown =  this.handleKeyDown.bind(this);
  }
  
  render(){
    return (
      <div  className="flower-display" 
            style={this.state.padStyle} 
            id={this.props.name} 
            onClick={this.playClip} >
        <h2>{this.display.display}</h2>
        <h2>{this.display.volume}</h2>
        <h2>{this.display.padBank}</h2>
      </div>
    );    
  }
  
} 
