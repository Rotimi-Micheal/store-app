import Classes from "./HeaderCartButton.module.css";
import { Icon } from "react-icons-kit";
import { shoppingBag } from "react-icons-kit/feather/shoppingBag";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);

  const numberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={Classes.button} onClick={props.onClick}>
      <span className={Classes.icon}>
        <Icon icon={shoppingBag} size={35} />
      </span>
      <span>Cart</span>
      <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
