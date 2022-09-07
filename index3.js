//async actions - api calling
//api url -https://jsonplaceholder.typicode.com/todos
//middleware - redux - thunk -
//axious api -

const { axios } = require("axios").default;
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

//define constants 
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

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
const todosRenderer = (state = initialTodosState, action) => {
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
  return (dispatch) => {
    dispatch(getTodosRequrest());
    axios
      .get(TODOS_URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

//store

const store = createStore(todosRenderer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
