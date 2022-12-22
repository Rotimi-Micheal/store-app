import classes from "./CartItem.module.css";

const Cartitem = (props) => {
  const { total, quantity, price } = props;
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
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default Cartitem;
