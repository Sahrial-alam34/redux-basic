const { createStore, combineReducers } = require("redux");

//products constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// cart constant
const GET_CARTS_ITEMS = "GET_CARTS_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";


//products states
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};
//carts states
const initialCartsState = {
  cart: ["sugar"],
  numberOfProducts: 1,
};

// products actions
const getProductAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProductAction = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

//product reducer
const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};
// carts actions
const getCartAction = () => {
  return {
    type: GET_CARTS_ITEMS,
  };
};
const addCartAction = (product) => {
  return {
    type: ADD_CART_ITEMS,
    payload: product,
  };
};

//cart reducer
const cartReducer = (state = initialCartsState, action) => {
  switch (action.type) {
    case GET_CARTS_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEMS:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
    productR: productsReducer,
    cartR:cartReducer
})

//store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("pen"));
store.dispatch(addProductAction("pencil"));
store.dispatch(getCartAction());
store.dispatch(addCartAction("pen"));
store.dispatch(addCartAction("pencil"));