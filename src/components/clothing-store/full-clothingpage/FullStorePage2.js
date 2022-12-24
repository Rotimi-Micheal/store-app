import { Fragment } from "react";
import { SecondproductData } from "../Data";
import classes from "./FullStore.module.css";
import FullStoreProp from "./FullStoreProp";

const FullStorePage2 = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        {SecondproductData.map((item) => {
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

export default FullStorePage2;
