import React, { Component }  from 'react' ;

import ValidationService from "../services/ValidationService";

import * as d3 from 'd3';

// CSS Styles for active Pad
const defaultTheme = {
  backgroundColor: 'orange',
  color: '#f1fa8c'
};

interface IProps {
  
}

interface IState {
  
}  

export default class Display extends Component<IProps, IState> {

  constructor(props){
    super(props);
    this.state = {
      padStyle : defaultTheme
    }
	 this.ref = SVGSVGElement; 
    // this.display = 'Showing something';
    this.display = ValidationService.firstValidationMethod();
	// this.ref = SVGSVGElement;  
	

    // this.playClip = this.playClip.bind(this);
    // this.handleKeyDown =  this.handleKeyDown.bind(this);
  }


  buildGraph(data: Array<number>) {
    const width = 200,
    scaleFactor = 10,
    barHeight = 20;

    const graph = d3.select(this.ref)
      .attr("width", width)
      .attr("height", barHeight * data.length);

    const bar = graph.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
            return "translate(0," + i * barHeight + ")";
      });

    bar.append("rect")
      .attr("width", function(d) {
                return d * scaleFactor;
      })
      .attr("height", barHeight - 1);
       
    bar.append("text")
      .attr("x", function(d) { return (d*scaleFactor); })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });
    
  }
  
  componentDidMount() {
    // activate   
    this.buildGraph([5, 10, 12]);
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
          <svg className="container" ref={(ref: SVGSVGElement) => this.ref = ref} width='100' height='100'></svg>
    
      </div>
    );    
  }
  
} 
