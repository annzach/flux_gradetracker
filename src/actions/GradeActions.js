import AppDispatcher from  '../AppDispatcher'
const GradeActions = {
  create(assignment) {
    AppDispatcher.dispatch({
      type:"GRADE_CREATE",
      payload:{
        assignment:assignment 
        
      }
    })
 },

  delete(id){
      console.log('product in action:', id)
    AppDispatcher.dispatch({
      type:"GRADE_DELETE",
      id:id
    })
  },
  }


export default GradeActions;