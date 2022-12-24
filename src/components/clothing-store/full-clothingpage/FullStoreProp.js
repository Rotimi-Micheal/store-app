import classes from "./FullStoreProps.module.css";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../reduxStore/cart-slice";

const FullStoreProp = (props) => {
  const dispatch = useDispatch();
  const { imageURL, name, price, description, id } = props;

  const addItemToCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        price,
        name,
      })
    );
  };

  return (
    <Fragment>
      <div className={classes.card}>
        <img src={imageURL} alt={name} className={classes.image} />
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{description}</p>
        <div className={classes.footer}>
          <div className={classes.price}>${price}</div>
          <button onClick={addItemToCartHandler} className={classes.button}>
            Add to Cart
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default FullStoreProp;
