import classes from "./ErrorMessage.module.scss";

const ErrorMessage = ({ message }) => {
  return <p className={classes.error}>{message}</p>;
};

export default ErrorMessage;
