import React, {Component} from 'react'
import GradeTable from './GradeTable'
import GradeStore from '../stores/GradeStore'


export default class GradeContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      assignments: GradeStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    GradeStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    GradeStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      assignments:GradeStore.getAll()
    })
  }

  render(){
    const {assignments}= this.state;
    console.log("product in product container",assignments);
    return (
    <GradeTable assignments={assignments} />
      )
  }
}