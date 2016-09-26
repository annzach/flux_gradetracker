import React, {Component} from 'react'
import GradeActions from '../actions/GradeActions'
import GradeStore from '../stores/GradeStore'

export default class Total extends Component{
  constructor(props){
    super(props);
    this.total = this.total.bind(this);
    this.state = {
      assign:GradeStore.getAll(),
      a:0,
      b:0,

    }

  }
  total(assign){
    let a =this.state.a, b=this.state.b;
    let x=0, y= 0;
    console.log("total",assign);
    for(let i = 0; i<assign.length; ++i){
        x += assign[i].totalpoints;
        y+= assign[i].pointsawarded;
    }
    this.setState({
      a:x,
      b:y
    })
  }
  
  render(){
    let x =this.state.a;
    let y = this.state.b;
    let {assign} = this.state;
    console.log("assign gradestor",assign);
    return (
        <div>
        <button onClick={()=>this.total(assign)} className="btn btn-success">Total</button>
        <h3>Total Score: {this.state.a}</h3>
        <h3>Total Awarded Score: {this.state.b}</h3>
        </div>
      )

  }
}