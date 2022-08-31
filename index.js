// //crate store ke amara require kore nebu from redux 
// const {createStore} = require('redux')

// //state
// const initialCounterState = {
//   count: 0,
// };

// const incrementCounter = () => {
//   return {
//     type: "increment",
//   };
// };

// const decrementCounter = () => {
//   return {
//     type: "decrement",
//   };
// };

// const counterReducer = (state = initialCounterState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       state;
//   }
// };


// //store - getState() , dispatch(), subscribe()  


// const store = createStore(counterReducer)

// store.subscribe(()=>{
// //console log er modde amra store er ki obostha ata bar bar check korbu
//     console.log(store.getState());
// });


// //dispatch aciton 
// store.dispatch(decrementCounter());

// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())






// tutorial 5 : redux | complete counter app

//WHAT WE NEED 
//state - count: 0
//action - increment, decrement, reset 
//reducer 
//store 

const {createStore} = require('redux')

const initialState = { 
    count: 0,
}

const incrementCounter = () =>{
    return {
        type: 'increment',
    }
}
const decrementCounter = () =>{
    return{
        type: 'decrement',
    }
}
const resetCounter = () =>{
    return{
        type: 'reset',
    }
}

const reducer = (state = initialState, action)=>{
switch(action.type){
    case 'increment':
        return{
            ...state,
            count: state.count + 1,   
        }
    case 'decrement':
        return{
            ...state,
            count: state.count - 1,
        }
    case 'reset':
        return{
            ...state,
            count:0
        }
    default:
        return state
}
}


///store
const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())