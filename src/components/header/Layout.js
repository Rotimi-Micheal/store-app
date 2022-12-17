import { Fragment } from "react";
import Header from "./Header";

const Layout = (Props) => {
  return (
    <Fragment>
      <Header />
      <main>{Props.children}</main>
    </Fragment>
  );
};

export default Layout;
