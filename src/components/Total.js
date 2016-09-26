import React, {Component} from 'react'
import GradeActions from '../actions/GradeActions'
import GradeStore from '../stores/GradeStore'

export default class Total extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      assign:GradeStore.getAll(),
      a:0,
      b:0,
      result:''

    }
   this.grade = this.grade.bind(this);
   this.total = this.total.bind(this);
  }

    grade(a1,a2){
    debugger;
    console.log("inside grade")
    console.log("a1",a1);
    console.log("a2",a2);
    let percent = (a2)/(a1)*100;
    let res ='';
    if(percent >= 90)
      res = 'A';
    
    else if(percent < 90 && percent >= 80)
      res = 'B';

    else if(percent < 80 && percent >= 70)
      res = 'C';
    
    else if(percent < 70 && percent >= 60)
      res = 'D';
    
    else{
      res = 'F'
    
    
  }
    console.log(res);
    return res;

  }

  total(assign){
    let g_a =0, g_b=0, g_c =0, g_d=0, g_f =0,a1=0,a2=0
    let result ='';
    let a =this.state.a, b=this.state.b;
    let x=0, y= 0;
    console.log("total",assign);
    for(let i = 0; i<assign.length; ++i){
       a1 = assign[i].totalpoints;
       a2 =assign[i].pointsawarded;
        x += assign[i].totalpoints;
        y+= assign[i].pointsawarded;
        let grades =this.grade(a1,a2);
        console.log('grade',grades);
        switch(grades){
          case 'A': g_a++;
                    break;
          case 'B': g_b++;
                    break;
          case 'C': g_c++;
                    break;
          case 'D': g_d++;
                    break;
          case 'F': g_f++;
                    break;
        }
       

    }
     let result1 = `A:${g_a} B:${g_b} C:${g_c} D:${g_d} F:${g_f}`;
     console.log('result',result);
    this.setState({
      a:x,
      b:y,
      result:result1
    })
    
  }


  
  render(){
    let x =this.state.a;
    let y = this.state.b;
    let result = this.state.result;
    let {assign} = this.state;
    console.log("assign gradestor",assign);
    return (
        <div>
        <button onClick={()=>this.total(assign)} className="btn btn-success">Total</button>
        <h3>Total Score: {this.state.a}</h3>
        <h3>Total Awarded Score: {this.state.b}</h3>
        <h3>Total Grades: {result}</h3>
        </div>
      )

  }
}