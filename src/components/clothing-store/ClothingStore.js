import { Fragment } from "react";
import ProductCarousel from "./Carousel";
import classes from "./ClothingStore.module.css";

// import ProductCard from "./ProductCard";

const ClothingStore = (props) => {
  return (
    <Fragment>
      <section className={classes.background}>
        <ProductCarousel />
      </section>
    </Fragment>
  );
};

export default ClothingStore;
