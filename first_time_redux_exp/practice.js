const {createStore} = require("redux")
//defining constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';
// state
const initialCounterState  = {
    count: 0,

}
// const initialUserState  = {
  
//     users:[
//         {
//             name:'sahrial'
//         }
//     ]

// }

// action - object - type, payload
//Increment counter
const incrementCounterAction = () =>{
    return{
        
            type: INCREMENT,
        
        

    }
}



//decrement counter
const decrementCounterAction = () =>{
    return{
        
            type: DECREMENT,
        
        

    }
}



//create reducer for counter
const counterReducer = (state=initialCounterState, action) =>{
    switch(action.type){
        case INCREMENT:
        return{
            ...state,
            count: state.count + 1
        }
        case DECREMENT:
        return{
            ...state,
            count: state.count - 1
        }

        default:
            state;
    }
}




// const addUser = () =>{
//     return{
        
//         type: ADD_USER,
//         payload: {
//             name: "shakil"
//         }
        


//     }
// }

//1. state
//2. dispatch action
//3. reducer
//4. store - getState(), dispatch(), subscribe()

//create store
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())