// const { createStore,combineReducers } = require("redux");
// //product state
// const initialProductState = {
//   products: ["sugar", "salt"],
//   nubmerofProduct: 2,
// };

// //cart cartstate
// const initialCartState = {
//   cart: ["sugar"],
//   numberOfProducts: 1,
// }

// //product action
// const getProducts = (product) => {
//   return {
//     type: "get_Product",
//   };
// };

// const addProduct = (product) => {
//   return {
//     type: "add_Product",
//     payload: product,
//   };
// };

// //cart action
// const getCartProducts = (product) => {
//   return {
//     type: "get_Cart_Product",
//   };
// };

// const addCartProduct = (product) => {
//   return {
//     type: "add_Cart_Product",
//     payload: product,
//   };
// };



// //product reducer
// const productReducer = (state = initialProductState, action) => {
//   switch (action.type) {
//     case "get_Product":
//       return {
//         ...state,
//       };
//     case "add_Product":
//       return {
//         products: [...state.products, action.payload],
//         nubmerofProduct: state.nubmerofProduct + 1,
//       };
//     default:
//       state;
//   }
// };

// //cartReducer
// const cartReducer = (state = initialCartState, action) => {
//   switch (action.type) {
//     case "get_Cart_Product":
//       return {
//         ...state,
//       };
//     case "add_Cart_Product":
//       return {
//         cart: [...state.cart, action.payload],
//         nubmerofProduct: state.nubmerofProduct + 1,
//       };
//     default:
//      return state;
//   }
// };

// //combine reducer
// const rootReducer = combineReducers({
//   productR: productReducer,
//   cartR: cartReducer,
// })


// //store
// const store = createStore(rootReducer);

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// store.dispatch(getProducts())
// store.dispatch(addProduct("pen"))

// store.dispatch(getCartProducts())
// store.dispatch(addCartProduct("mobile"))





//uper code was wrong that why i take anisul islam code

// const { createStore, combineReducers } = require("redux");


// // product states
// const initialProductState = {
//   products: ["sugar", "salt"],
//   numberOfProducts: 2,
// };

// // cart states
// const initialCartState = {
//   cart: ["sugar"],
//   numberOfProducts: 1,
// };

// // product actions
// const getProductAction = () => {
//   return {
//     type: 'GET_PRODUCTS',
//   };
// };
// const addProductAction = (product) => {
//   return {
//     type: 'ADD_PRODUCTS',
//     payload: product,
//   };
// };

// // cart actions
// const getCartAction = () => {
//   return {
//     type: 'GET_CART_ITEMS',
//   };
// };
// const addCartAction = (product) => {
//   return {
//     type: 'ADD_CART_ITEMS',
//     payload: product,
//   };
// };

// const productsReducer = (state = initialProductState, action) => {
//   switch (action.type) {
//     case 'GET_PRODUCTS':
//       return {
//         ...state,
//       };
//     case 'ADD_PRODUCTS':
//       return {
//         products: [...state.products, action.payload],
//         numberOfProducts: state.numberOfProducts + 1,
//       };

//     default:
//       return state;
//   }
// };

// const cartReducer = (state = initialCartState, action) => {
//   switch (action.type) {
//     case 'GET_CART_ITEMS':
//       return {
//         ...state,
//       };
//     case 'ADD_CART_ITEMS':
//       return {
//         cart: [...state.cart, action.payload],
//         numberOfProducts: state.numberOfProducts + 1,
//       };

//     default:
//       return state;
//   }
// };

// const rootReduer = combineReducers({
//   productR: productsReducer,
//   cartR: cartReducer,
// });

// const store = createStore(rootReduer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(getProductAction());
// store.dispatch(addProductAction("pen"));
// store.dispatch(getCartAction());
// store.dispatch(addCartAction("salat"));