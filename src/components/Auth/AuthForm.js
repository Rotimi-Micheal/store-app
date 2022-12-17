import { useRef, useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModelHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
    } else {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNXZM9Iu_UglJMHddwKflKjG3OSQRYT5s`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      ).then((res) => {
        if (res.ok) {
        } else {
          return res.json().then((data) => {
            console.log(data);
          });
        }
      });
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
