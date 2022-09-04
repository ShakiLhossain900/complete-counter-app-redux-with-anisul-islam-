const { createStore } = require("redux");
//product reducer
const initialProductState = {
  products: ["sugar", "salt"],
  nubmerofProduct: 2,
};

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

//store
const store = createStore(productReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProducts())