import classes from "./SkeletonCard.module.scss";

const SkeletonCard = () => {
  return (
    <div className={classes.skeletonCard}>
      <div className={classes.imagePlaceholder}></div>
      <div className={classes.detailsPlaceholder}>
        <div className={classes.titlePlaceholder}></div>
        <div className={classes.authorPlaceholder}></div>
        <div className={classes.descriptionPlaceholder}></div>
      </div>
    </div>
  );
};
export default SkeletonCard;
