import classes from "./ProductCard.module.css";
// import { Icon } from "react-icons-kit";
// import { star } from "react-icons-kit/feather/star";
import { Fragment } from "react";

const ProductCard = (props) => {
  return (
    <Fragment>
      <div className={classes.padding}>
        <div className={classes.card}>
          <img
            className={classes["product--image"]}
            alt=""
            src={props.imageURL}
          />
          <h2>{props.name}</h2>
          <p className="price">{props.price}</p>
          <p className="">description of product</p>
          <p className="">{props.description}</p>
          <p>
            <button>Add To Cart</button>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
