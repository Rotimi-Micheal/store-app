import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Layout from "./components/header/Layout";
import Welcome from "./pages/Welcome";
import { Fragment } from "react";
import Store from "./pages/Store";
import Auth from "./pages/Auth";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
