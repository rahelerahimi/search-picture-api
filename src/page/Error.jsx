import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  parent: {
    width: "100%",
    height: "100vh",
    backgroundColor: "midnightblue",
    textAlign: "center",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
  },
}));

const Error = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.parent}>
        <h1>404</h1>
      </div>
    </>
  );
};

export default Error;
