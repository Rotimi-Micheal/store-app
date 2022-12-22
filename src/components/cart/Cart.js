import Classes from "./Cart.module.css";
import Cartitem from "./CartItem";
import Modal from "../Ui/Modal";

const Cart = (props) => {
  const CartItems = (
    <ul className={Classes["cart-item"]}>
      {[
        {
          id: 1,
          amount: 1,
          name: "cloth",
          price: "$22.99",
        },
        {
          id: 2,
          amount: 1,
          name: "cloth",
          price: "$29.99",
        },
        {
          id: 3,
          amount: 1,
          name: "cloth",
          price: "$42.99",
        },
      ].map((item) => {
        return (
          <Cartitem
            name={item.name}
            amount={item.amount}
            price={item.price}
            key={item.id}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>$35.99</span>
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
