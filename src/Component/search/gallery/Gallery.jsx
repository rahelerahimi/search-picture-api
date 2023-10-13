import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./galleryStyle";
import Button from "@material-ui/core/Button";
import Skeleton from "../../skeleton/Skeleton";

const Gallery = ({ result }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.gallery}>
        <div className={classes.topgallery}>

        <Link to="/" className={classes.button}>
          <Button variant="contained" color="secondary">
            {" "}
            back to home{" "}
          </Button>
        </Link>
        <span className={classes.textvpn}>please turn on vpn for see picture</span>
        </div>
      

        <div className={classes.divSkeleton}>
          {!result &&
            [1, 2, 3].map((item, index) => {
              return <Skeleton key={index} />;
            })}
        </div>

        <div className={classes.result}>
          {result &&
            result.map((item) => (
              <img
                key={item.id}
                src={item.urls.regular}
                alt=""
                style={{ width: "250px", height: "250px", padding: "10px" }}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
