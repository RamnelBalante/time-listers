
/* 
       Stratagy for managin data.
       MVC

             Store (data) Model

             Control Reducer
             action- what do you want to do to the store
                   - add
                     action.type = "add"
                   - edit
                     action.type = "edit"
                     reducer will add the edit object to the store
                   - delete
             payload
              data to perform the action
              action.type = "edi"
              find the employee by the key
              replace the existing data with the new data paylaod

*/
import {getStore} from './../redux/store'

const reducer  = function( action){
  console.log(action.payload, action.type)
     
    switch(action.type){
        case "edit":
          console.log(payload)
          // NEXT CLASS REMOVE EMPLOYEE FROM THE STORE
          action.cb()
          
        ;
        case "delete": return "remove an employee";
        case "add": return "add a new employee";
        default: return getStore()
    }

}

export default reducer