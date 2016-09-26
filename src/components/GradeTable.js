import React, {Component} from 'react'
import Numeral from 'numeral';
import GradeActions from '../actions/GradeActions'
export default class GradeTable extends Component{
  constructor(props){
    super(props);
    this.grade = this.grade.bind(this);
  }
  
  _delete(id){
    GradeActions.delete(id);
  }
 
 
  grade(awardedpoints,totalpoints){
    console.log(awardedpoints);
    console.log(totalpoints);
    let percent = (awardedpoints)/(totalpoints)*100;
    if(percent >= 90)
      return 'A';
    else if(percent < 90 && percent >= 80)
      return 'B';
    else if(percent < 80 && percent >= 70)
      return 'C';
    else if(percent < 70 && percent >= 60)
      return 'D';
    else
      return 'F'
  }
  render(){
    const {assignments} = this.props;
    console.log("assignments",assignments);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Possible Points</th>
            <th>Awarded Points</th>
            <th>Grade</th>  
          </tr>
        </thead>
        <tbody>
      {
           assignments.map(element=>{
              console.log(element);
              let id =element.id;
              let name =element.name;
              let totalpoints =element.totalpoints;
              let awardedpoints = element.pointsawarded;
                return (
                  <tr key ={id}>
                  <td>{name}</td>
                  <td>{totalpoints}</td>
                  <td>{awardedpoints}</td>
                  <td>{this.grade(awardedpoints,totalpoints)}</td>
                  <td><button className ="btn btn-danger" onClick={()=>this._delete(id)}>Delete</button></td>
                  </tr>
                )
              }
          ) }
        </tbody>
      </table>
      )

  }
}