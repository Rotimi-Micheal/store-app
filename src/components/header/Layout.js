import { Fragment, useState } from "react";
import Header from "./Header";
import Cart from "../cart/Cart";

const Layout = (Props) => {
  const [CartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {CartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>{Props.children}</main>
    </Fragment>
  );
};

export default Layout;
