import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap:'wrap',
    alignItems: "center",
    background: "blue",
    height:150,
    padding: "0 20px",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 35,
    padding: "0 20px",
  },
  input: {
    width: 270,
    height: 27,
    border: "1px solid silver",
    outline: "none",
    borderRadius: 5,
    padding: 10,
  },
  span: {
    fontSize: 20,
    fontWeight:'bold',
    color: "white",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
