import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Layout from "./components/header/Layout";
import Welcome from "./pages/Welcome";
import { Fragment, useContext } from "react";
import Store from "./pages/Store";
import Auth from "./pages/Auth";
import AuthContext from "./store/auth-context";
import FullBlog from "./components/blog/FullBlogPost";
import FullStorePage from "./pages/FullStorePage";
import SecondStorePage from "./pages/SecondStorePage";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Fragment>
      <Layout>
        <Routes>
          {isLoggedIn && (
            <Route path="/" element={<Navigate replace to="/welcome" />} />
          )}
          {!isLoggedIn && (
            <Route path="/*" element={<Navigate replace to="/auth" />} />
          )}
          {isLoggedIn && <Route path="/welcome" element={<Welcome />} />}
          {isLoggedIn && <Route path="/blog" element={<Blog />}></Route>}
          {isLoggedIn && <Route path="/blog/:blogId" element={<FullBlog />} />}

          {isLoggedIn && <Route path="/store" element={<Store />}></Route>}
          {isLoggedIn && (
            <Route
              path="/store/full-store1"
              element={<FullStorePage />}
            ></Route>
          )}
          {isLoggedIn && (
            <Route
              path="/store/full-store2"
              element={<SecondStorePage />}
            ></Route>
          )}
          {!isLoggedIn && <Route path="/auth" element={<Auth />}></Route>}
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
