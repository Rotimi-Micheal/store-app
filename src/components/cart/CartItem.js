import { useDispatch } from "react-redux";
import { cartAction } from "../../reduxStore/cart-slice";
import classes from "./CartItem.module.css";

const Cartitem = (props) => {
  const dispatch = useDispatch();

  const { total, quantity, price, id, name } = props;

  const removeItemHandler = () => {
    dispatch(cartAction.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(cartAction.addItemToCart({ id, name, price }));
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`$${price.toFixed(2)}`}</span>

          <span>{`$${total.toFixed(2)}`}</span>
          <span className={classes.amount}>x {quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default Cartitem;
