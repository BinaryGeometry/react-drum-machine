import React, { Component } from 'react';
import './styles/simple-grid.scss';
import './styles/App.sass';

import { padBanks } from './data/data';
import Settings from './components/Settings';
import Pads from './components/Pads'
import Display from './components/Display'
// import CommentList from './components/CommentList'

import ValidationService from "./services/ValidationService";

// Project Title
const projectTitle = "Celestial Flower Drum";

// Main App Component
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      padBank : padBanks["heater"] ,
      display : " ",
      volume : 50
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.changeBank = this.changeBank.bind(this);
  }
  
  updateDisplay(name) {
    this.setState({ display : name });
    ValidationService.secondValidationMethod('display', name);
  }
  
  updateVolume(e){
    this.setState({ volume : e.target.value });
    ValidationService.secondValidationMethod('volume', e.target.value);
  }
  
  changeBank(val){
    this.setState({ padBank : val.bank });
    ValidationService.secondValidationMethod('padBank', val.bank);
  }
  
          // <div id="title">{projectTitle}</div>
  render(){
    return (
      <section>
        <article className="container">


          <div className="row">
            <div className="col-6">
              <Settings display={this.state.display} 
                        volume={this.state.volume} 
                        updateVolume={this.updateVolume} 
                        changeBank={this.changeBank}/>
              <Pads padBank={this.state.padBank} 
                    updateDisplay={this.updateDisplay} 
                    volume={this.state.volume}/>
            </div>
            <div className="col-6">
              <p>the other part</p>
              <Display/>

            </div>
          </div>
        </article>
        <footer>
          Seeded from a Drum Machine project and Built by Romaric Fargetton using <a href="https://reactjs.org/">React</a> and <a href="https://draculatheme.com/">Dracula</a>
        </footer>

      </section>
    );
  }
}

