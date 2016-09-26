import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events';
import Storage from '../Storage';

 let _assignments = Storage.read('assignments')||[]; 
 let _assignmentsTotScore = _assignments.reduce((prev, curr) => prev.pointsawarded + curr.pointsawarded);
class GradeStore extends EventEmitter{
  constructor(){
    super();
      AppDispatcher.register(action=>{
        console.log("every time an action is dipatched --msg from store",action);

      switch(action.type){
        case 'GRADE_CREATE':
        console.log("payload",action.payload)
        let assignment =action.payload.assignment;
         _assignments.push(assignment);
        console.log("store",assignment);
        this.emit('CHANGE');
        break;

        case 'GRADE_DELETE':
         console.log("delete_id", action.id);
         let newArr = _assignments.filter(element=> element.id != action.id);
         console.log(newArr);
         _assignments = newArr;
         this.emit('CHANGE');
         break;

      }
      });
      this.on('CHANGE',()=>{
        console.log("store_assignment", _assignments);
        console.log('_assignmentsTotScore:',_assignmentsTotScore )
        Storage.write('assignments',_assignments);

      })
    }
  
  startListening(cb){
    this.on('CHANGE',cb);
  }
  stopListening(cb){
    this.removeListener('CHANGE',cb);
  }
  getAll(){
    return _assignments;
  }

}

export default new GradeStore();