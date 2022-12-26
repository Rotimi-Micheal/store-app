import classes from "./Main.module.css";

const Main = () => {
  return (
    <section>
      <div className={classes["welcome-page"]}>
        <h1>Welcome to our website!</h1>
        <p>
          We are glad you are here. Our website includes a blog where we share
          updates and interesting articles, as well as a store where you can
          purchase products related to our business.
        </p>
        <p>
          Take a look around and let us know if you have any questions or need
          help finding something.
        </p>
        <p>Thank you for visiting.</p>
      </div>
    </section>
  );
};

export default Main;
