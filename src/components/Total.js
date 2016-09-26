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
  total(){
    console.log("total");
  }
  
  render(){
    let {assign} = this.state;
    console.log("assign gradestor",assign);
/*    const {assignments} = this.props;
    console.log("assignments",assignments);*/
    return (
        <button onClick={this.total} className="btn btn-success">Total</button>
      )

  }
}