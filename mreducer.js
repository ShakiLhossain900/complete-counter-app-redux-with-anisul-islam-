const { createStore,combineReducers } = require("redux");
//product state
const initialProductState = {
  products: ["sugar", "salt"],
  nubmerofProduct: 2,
};

//cart cartstate
const initialCartState = {
  cart: ["sugar"],
  numberOfProducts: 1,
}

//product action
const getProducts = (product) => {
  return {
    type: "get_Product",
  };
};

const addProduct = (product) => {
  return {
    type: "add_Product",
    payload: product,
  };
};

//cart action
const getCartProducts = (product) => {
  return {
    type: "get_Cart_Product",
  };
};

const addCartProduct = (product) => {
  return {
    type: "add_Cart_Product",
    payload: product,
  };
};



//product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "get_Product":
      return {
        ...state,
      };
    case "add_Product":
      return {
        products: [...state.products, action.payload],
        nubmerofProduct: state.nubmerofProduct + 1,
      };
    default:
      state;
  }
};

//cartReducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "get_Cart_Product":
      return {
        ...state,
      };
    case "add_Cart_Product":
      return {
        cart: [...state.cart, action.payload],
        nubmerofProduct: state.nubmerofProduct + 1,
      };
    default:
     return state;
  }
};

//combine reducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
})


//store
const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProduct("pen"))

store.dispatch(getCartProducts())
store.dispatch(addCartProduct("mobile"))