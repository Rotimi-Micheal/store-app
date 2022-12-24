import { Fragment } from "react";
import { productData } from "../Data";
import FullStoreProp from "./FullStoreProp";
import classes from "./FullStore.module.css";

const FullStore = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        {productData.map((item) => {
          return (
            <FullStoreProp
              imageURL={item.imageURL}
              key={item.id}
              price={item.price}
              name={item.name}
              description={item.description}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default FullStore;
