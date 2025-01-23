// step1: creating the initial State for cart
export let initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

// step2: creating the Reducers

const Reducer = (state, action) => {
  console.log("State", state);
  switch (action.type) {
    case "ADD_TO_CART":
      // checking the Item already it exists in the cart Or Not
      let ExistingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      console.log(ExistingItem);
      if (ExistingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_ITEM_IN_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT":
      if (action.payload && action.payload.quantity > 1) {
        console.log("Before Decrement:", state.cart);
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        console.log("After Decrement:", updatedCart);

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        console.warn(
          "DECREMENT action skipped: invalid payload or quantity <= 1"
        );
        return state; // No changes if conditions are not met
      }

    default:
      break;
  }
};

export default Reducer;