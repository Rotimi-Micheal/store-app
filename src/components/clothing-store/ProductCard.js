import classes from "./ProductCard.module.css";

import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../reduxStore/cart-slice";

const ProductCard = (props) => {
  const { id, price, name, description, imageURL } = props;

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <Fragment>
      <div className={classes.padding}>
        <div className={classes.card}>
          <img className={classes["product--image"]} alt="" src={imageURL} />
          <h2>{name}</h2>
          <p className="price">{`$${price.toFixed(2)}`}</p>
          <p className="">description of product</p>
          <p className="">{description}</p>
          <p>
            <button onClick={addToCartHandler}>Add To Cart</button>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
