//we have to always import React for JSX 
import React,{Component} from 'react';
import GradeForm from './GradeForm';
import GradeContainer from './GradeContainer'
import Total from './Total'

export default class Layout extends Component {
  render(){
    return(
       <div className="container">
       <h1 className="text-center">Grade Tracker</h1>
       <GradeForm/>
       <GradeContainer/>
       <Total/>
       </div>
      )
  }
}