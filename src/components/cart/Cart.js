import Classes from "./Cart.module.css";
import Cartitem from "./CartItem";
import Modal from "../Ui/Modal";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = useSelector((state) => state.cart.items);

  const total = totalAmount
    .map((item) => item.quantity * item.price)
    .reduce((total, singleItem) => total + singleItem, 0);
  console.log(total);

  return (
    <Modal onClose={props.onClose}>
      <ul className={Classes["cart-items"]}>
        {cartItems.map((item) => {
          return (
            <Cartitem
              name={item.name}
              quantity={item.quantity}
              total={item.total}
              price={item.price}
            />
          );
        })}
      </ul>
      ;
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>{total.toFixed(2)}</span>
      </div>
      <div className={Classes.actions}>
        <button onClick={props.onClose} className={Classes["button--alt"]}>
          close
        </button>
        <button className={Classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
