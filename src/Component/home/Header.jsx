import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./headerStyle";

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.parent}>
        <div className={classes.text}>
          <h1 className={classes.title1}>hi , welcome </h1>
          <h2 className={classes.title2}>search Any picture and enjoy </h2>
          <Link to="/search" className={classes.link}>
            search
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
