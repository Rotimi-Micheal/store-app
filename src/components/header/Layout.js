import { Fragment } from "react";
import Header from "./Header";
import Cart from "../cart/Cart";
import { modalActions } from "../../reduxStore/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const Layout = (Props) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.modal.cartIsShown);
  // const [CartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    dispatch(modalActions.showModal());
  };

  const hideCartHandler = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <Fragment>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>{Props.children}</main>
    </Fragment>
  );
};

export default Layout;
