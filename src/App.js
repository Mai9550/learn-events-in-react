import logo from './logo.svg';
import './App.css';
import React from 'react'
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
     <div id="container"></div>
    </div>
  );
}

class Counter extends React.Component{
  render (){
    var textStyle={
      fontSize: 72,
      fontFamily:'sans-serif',
      color:'#333',
      fontWeight:'bold'
    }
    return (
      <div style={textStyle}>
        {this.props.display}
      </div>
    )
  }
}
class CounterParent extends React.Component{
constructor(props){
  super(props);
  this.state={
    count:0
  }
  this.increase=this.increase.bind(this)
}

increase(e){
  var currentCount = this.state.count;
  if(e.shiftKey){
    currentCount+=10;
  } else {
    currentCount+=1;
  }
  this.setState({
    count: currentCount
  });
}
  render(){
var backgroundStyle={
  padding:50,
  backgroundColor:'#FFC53A',
  width:250,
  height:100,
  borderRadius:10,
  textAlign:'center'
}
 var buttonStyle={
   fontSize:'1em',
   width:30,
   height:30,
   fontFamily:'sans-serif',
   color:'#333',
   fontWeight:'bold',
   lineHeight:'3px'
 } 
 return(
   <div style={backgroundStyle}>
<Counter display={this.state.count}/>
<button style={buttonStyle} onClick={this.increase}>+</button>
   </div>
 )

  }


}

export default CounterParent;
