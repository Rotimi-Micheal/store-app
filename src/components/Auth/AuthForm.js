import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../store/auth-context";
import { API_KEY } from "../helper/Helper";
import "./AuthForm.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsloading] = useState(false);

  const switchAuthModelHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsloading(true);

    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    });

    setIsloading(false);
    try {
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(data.error.message || "Authentication Failed");
      }

      const data = await response.json();
      authCtx.login(data.idToken);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="auth">
      <h1>{isLogin ? "Login" : "SignUp"}</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="email">Your E-Mail</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className="control">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className="action">
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className="toggle"
            onClick={switchAuthModelHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
