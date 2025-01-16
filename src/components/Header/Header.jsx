import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="src/assets/images/logo.jpg"
        alt="logo"
      />
      <div className={classes.container}>
        <h1 className={classes.title}>
          BiblioExplorer <i className="fa-solid fa-magnifying-glass"></i>
        </h1>
        <p className={classes.subtitle}>Discover. Explore. Read.</p>
      </div>
    </header>
  );
};

export default Header;
