// //async actions - api calling
// //api url -https://jsonplaceholder.typicode.com/todos
// //middleware - redux - thunk -
// //axious api -

// const { axios } = require("axios").default;
// const { createStore, applyMiddleware } = require("redux");
// const thunk = require("redux-thunk").default;

// //define constants
// const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// //states
// const initialTodosState = {
//   todos: [], ///data fetch korle jei array golo asbe ai todor modde agolo thakbe
//   isLoading: false,
//   error: null, //kono error dora porle amara todos er modde rekhe debu
// };

// ///actions

// const getTodosRequrest = () => {
//   return {
//     type: "getTodosRequrest",
//   };
// };
// const getTodosFailed = (error) => {
//   return {
//     type: "getTodosRequrest",
//     payload: error,
//   };
// };
// const getTodosSuccess = (todos) => {
//   return {
//     type: "getTodosSuccess",
//     payload: todos,
//   };
// };

// //reducers
// const todosRenderer = (state = initialTodosState, action) => {
//   switch (action.type) {
//     case "getTodosRequrest":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case "getTodosSuccess":
//       return {
//         ...state,
//         isLoading: false,
//         todos: action.payload,
//       };
//     case "getTodosFailed":
//       return {
//         ...state,
//         isLoading: false,
//         errors: action.payload,
//       };

//     default:
//       return state;
//   }
// };
// ///async action creator

// const fetchData = () => {
//   return (dispatch) => {
//     dispatch(getTodosRequrest());
//     axios
//       .get(TODOS_URL)
//       //    .get(TODOS_URL)
//        //TypeError: Cannot read properties of undefined (reading 'get')
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
// };

// //store

// const store = createStore(todosRenderer, applyMiddleware(thunk));

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(fetchData());

// anisul islam code
// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware- redux-thunk
// axios api

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const reduxThunk = require("redux-thunk").default;

// define constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// define state
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};
const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      state;
  }
};

// async action creator
// thunk-middleware allows us to return a function isntead of obejct
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(TODOS_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(getTodosFailed(error));
      });
  };
};

const store = createStore(todosReducer, applyMiddleware(reduxThunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
