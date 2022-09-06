const { createStore } = require("redux");

// product states
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// product actions
const getProductAction = () => {
  return {
    type: "GET_PRODUCTS",
  };
};
const addProductAction = (product) => {
  return {
    type: "ADD_PRODUCTS",
    payload: product,
  };
};

const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
      };
    case "ADD_PRODUCTS":
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const store = createStore(productsReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("pen"));
