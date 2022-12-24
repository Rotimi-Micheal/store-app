import { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive, SecondproductData } from "./Data";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductCarousel = (props) => {
  return (
    <Fragment>
      <div>
        <h1>Darko Collection</h1>
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

        <Link to="/store/full-store1">see more</Link>
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
      <Link to="/store/full-store2">see more</Link>
    </Fragment>
  );
};

export default ProductCarousel;
