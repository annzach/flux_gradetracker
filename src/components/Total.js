import React, {Component} from 'react'
import GradeActions from '../actions/GradeActions'
import GradeStore from '../stores/GradeStore'

export default class Total extends Component{
  constructor(props){
    super(props);
    this.total = this.total.bind(this);
    this.state = {
      assign:GradeStore.getAll()
    }

  }
  total(assign){
    console.log("total",assign);
 
  }
  
  render(){
    let {assign} = this.state;
    console.log("assign gradestor",assign);
    return (
        <button onClick={this.total(assign)} className="btn btn-success">Total</button>
      )

  }
}