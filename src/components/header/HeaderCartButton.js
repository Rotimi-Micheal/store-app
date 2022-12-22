import Classes from "./HeaderCartButton.module.css";
import { Icon } from "react-icons-kit";
import { shoppingBag } from "react-icons-kit/feather/shoppingBag";
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button className={Classes.button} onClick={props.onClick}>
      <span className={Classes.icon}>
        <Icon icon={shoppingBag} size={35} />
      </span>
      <span>Cart</span>
      <span className={Classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
