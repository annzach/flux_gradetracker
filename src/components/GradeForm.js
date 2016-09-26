import React,{Component} from 'react'
import GradeActions from '../actions/GradeActions'
import uuid from 'uuid'

export default class GradeForm extends Component{
  constructor(props){
    super(props);
    this._submitForm = this._submitForm.bind(this);

  }
  _submitForm(event){
    event.preventDefault();
    const {Name,TotalPoints,Awardedpoints} = this.refs;
    let assignment = {
      name: Name.value,
      totalpoints: parseFloat(TotalPoints.value),
      pointsawarded:parseFloat(Awardedpoints.value),
      id: uuid()
    }
    console.log(assignment);
    Name.value = '';
    TotalPoints.value = '';
    Awardedpoints.value='';
    GradeActions.create(assignment);

  }
  render(){
    return (
      <form onSubmit={this._submitForm}>
      <div className="form-group">
        <label htmlFor="productname"> Name:</label>
        <input type="text" className="form-control"  required ref="Name"/>
      </div>
      <div className="form-group">
        <label htmlFor="productprice">Total Points</label>
        <input type="number" className="form-control"  ref="TotalPoints" required min='0' step = '0.01' max='100'/>
      </div>
       <div className="form-group">
        <label htmlFor="productprice">Points Awarded</label>
        <input type="number" className="form-control"  ref="Awardedpoints" required min='0' step = '0.01' max='100'/>
      </div>
      <button className ="btn btn-success" >Add Assignment</button>
      </form>

      )
  }
}