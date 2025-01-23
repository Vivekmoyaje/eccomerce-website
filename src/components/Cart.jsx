import React from "react";
import { useCart } from "../store/StoreContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;
  // function for Handling the Increment
  function handleIncrement(productId) {
    dispatch({ type: "INCREMENT", payload: { id: productId } });
    toast.success("Incremented item to cart");
  }
  function handleDecrement(productId, quantity) {
    if (quantity > 1) {
      dispatch({ type: "DECREMENT", payload: { id: productId, quantity } });
      toast.success("Decremented item in cart");
    } else {
      toast.warning("Cannot decrease quantity below 1");
    }
  }
  // function for Handling the Remove
  function handleRemove(productId) {
    dispatch({ type: "REMOVE_ITEM_IN_CART", payload: { id: productId } });
    toast.success("Removed item to cart");
  }

  return (
    <div className="container py-5">
      <div className="row ">
        {cart.length > 0 ? (
          cart.map((item, id) => (
            <div key={id} className="col-12 col-sm-12 col-md-3 col-lg-3 mb-4">
              <div className="card shadow-md p-3 shadow-blue-500 h-[480px]">
                <img
                  src={item.image}
                  className="card-img-top product-img"
                  alt="..."
                />
                <div className="card-body ">
                  <h5 className="card-title font-bold text-[1.3rem] ">
                    {item.title}
                  </h5>
                  <p classNAme="card-text">
                    Price : ${item.price * item.quantity}
                  </p>
                  <p className="card-text text-bold mb-3">
                    Quantity : {item.quantity}
                  </p>
                  <button
                    className="btn btn-outline-success text-2xl text-bold"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-danger text-2xl text-bold mx-1"
                    onClick={() => handleDecrement(item.id, item.quantity)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-outline-danger text-2xl text-bold "
                    onClick={() => handleRemove(item.id)}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Cart Is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
