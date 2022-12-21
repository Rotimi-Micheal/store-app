import { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive, SecondproductData } from "./Data";
import ProductCard from "./ProductCard";

const ProductCarousel = () => {
  return (
    <Fragment>
      <Carousel showDots={true} responsive={responsive}>
        {productData.map((item) => {
          return (
            <ProductCard
              key={item.id}
              name={item.name}
              imageURL={item.imageURL}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </Carousel>
      <a href="#ll">see more</a>

      <Carousel showDots={true} responsive={responsive}>
        {SecondproductData.map((item) => {
          return (
            <ProductCard
              key={item.id}
              name={item.name}
              imageURL={item.imageURL}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </Carousel>
      <a href="#ll">see more</a>
    </Fragment>
  );
};

export default ProductCarousel;
