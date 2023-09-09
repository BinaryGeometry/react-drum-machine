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
	  
    // this.display = 'Showing something';
    this.display = ValidationService.firstValidationMethod();
	this.ref = SVGSVGElement;  

	this.width = 200;
    this.scaleFactor = 10;
    this.barHeight = 20;
	

    // this.playClip = this.playClip.bind(this);
    // this.handleKeyDown =  this.handleKeyDown.bind(this);
  }


  buildGraph(data: Array<number>, width: Number, scaleFactor: Number, barHeight: Number) {
  	// this.ref = SVGSVGElement;
   
	console.log('called with data', data)

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
    console.log('mounting')
    this.buildGraph([this.display.volume, this.display.volume, this.display.volume],
    	this.width, this.scaleFactor, this.barHeight);

  }

   componentDidUpdate() {
	const graph = d3.select(this.ref)
	const bar = graph.selectAll("g")
           .remove()

      .exit()

      bar.data([this.display.volume, this.display.volume, this.display.volume])
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
            return "translate(0," + i * this.barHeight + ")";
      });


   //  // this.buildGraph([this.display.volume, this.display.volume, this.display.volume]);


   //  // this.buildGraph([55, 150, 152]);
   //  // d3.selectAll("cirlce")

   //  //   .remove()

   //  //   .exit()

   //  // this.createGraph.data = [this.state.income, this.state.savings, this.state.housing, this.state.subscriptions, this.state.transportation, this.state.entertainment, this.state.food]

   //  // this.createGraph()

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
