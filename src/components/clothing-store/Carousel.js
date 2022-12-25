import { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive, SecondproductData } from "./Data";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import classes from "./Carousel.module.css";

const ProductCarousel = (props) => {
  return (
    <Fragment>
      <div>
        <h1 className={classes["section-header"]}>Darko Collection</h1>
        <div className={classes.info}>
          <p className={classes["section-header"]}>
            This is Darko Collection!, Selling out soon.
          </p>
        </div>
        <Carousel showDots={true} responsive={responsive}>
          {productData.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                imageURL={item.imageURL}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </Carousel>
        <div className={classes.more}>
          <button className={classes.button}>
            <Link to="/store/full-store1">see more</Link>
          </button>
          <p>Darko Collection</p>
        </div>
      </div>

      <div>
        <h1 className={classes["section-header"]}>Alien's Collection</h1>
        <div className={classes.info}>
          <p className={classes["section-header"]}>
            This is Alien's Collection!, Selling out soon.
          </p>
        </div>
        <Carousel showDots={true} responsive={responsive}>
          {SecondproductData.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                imageURL={item.imageURL}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </Carousel>
        <div className={classes.more}>
          <button className={classes.button}>
            <Link to="/store/full-store2">see more</Link>
          </button>
          <p>Alien Collection</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCarousel;
