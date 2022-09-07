//async actions - api calling
//api url -https://jsonplaceholder.typicode.com/todos
//middleware - redux - thunk -
//axious api -

const { createStore } = require("redux");

//states
const initialTodosState = {
  todos: [], ///data fetch korle jei array golo asbe ai todor modde agolo thakbe
  isLoading: false,
  error: null, //kono error dora porle amara todos er modde rekhe debu
};

///actions

const getTodosRequrest = () => {
  return {
    type: "getTodosRequrest",
  };
};
const getTodosFailed = (error) => {
  return {
    type: "getTodosRequrest",
    payload: error,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: "getTodosSuccess",
    payload: todos,
  };
};

//reducers
const todosRenderer = (state = initialProductState, action) => {
  switch (action.type) {
    case "getTodosRequrest":
      return {
        ...state,
        isLoading: true,
      };
    case "getTodosSuccess":
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case "getTodosFailed":
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
///async action creator

const fetchData = () => {

}

//store

const store = createStore(todosRenderer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(fetchData())