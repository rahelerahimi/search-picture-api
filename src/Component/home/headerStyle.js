import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  parent: {
    with: "100%",
    height: "100vh",
    background: "blue",
    color: "white",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    zIndex: "1100",
    textAlign: "center",
    wordBreak: " unset",
    textTransform: " capitalize",
    padding: "10px",
  },
  title1: {
    marginTop: "10em",
    fontWeight: "bold",
  },
  title2: {
    marginTop: "1em",
    marginBottom: "1.5em",
    fontWeight: "bold",
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    marginTop: "2em",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: " capitalize",
    border: "1px solid white",
    padding: " 0.5em 1em",
    borderRadius: "1em",
    "&:hover": {
      color: "white",
    },
  },
}));
