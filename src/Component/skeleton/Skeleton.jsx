import React from "react";
import { useStyles } from "./skeletonStyle";

const Skeleton = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.parentSkeleton}>
        {[1, 2, 3].map((item, index) => {
          return (
            <div className={classes.skeleton} key={index}>
              <div className={classes.shimmer}></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skeleton;
