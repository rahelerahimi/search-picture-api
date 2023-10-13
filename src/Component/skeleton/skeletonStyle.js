import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  parentSkeleton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
   
  },
  skeleton: {
    width: "100%",
    backgroundColor: "silver",
    borderRadius: "5px",
    margin: "1.5em  1em",
    padding: "6em 2em",
    opacity: "0.5",
    position: "relative",
  },
  shimmer: {
    position: "absolute",
    top: "0",
    laft: "0",
    width: "50%",
    heigth: "100%",
    background: " rgba(255, 255, 255, .2)",
    transform: " skewX(-20deg)",
    boxShadow: " 0 0 30px 30px rgba(255, 255, 255, .05)",
    padding: "100px 30px",
    animation: "$loading 2000ms infinite",
  },
  "@keyframes loading": {
    " 0%": { transform: "translateX(-150%)" },
    " 50%": { transform: "translateX(-60%)" },
    "100%": { transform: "translateX(150%)" },
  },
}));
