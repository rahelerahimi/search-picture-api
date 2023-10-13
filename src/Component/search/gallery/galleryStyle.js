import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  gallery: {
    width: "82%",
    padding: "40px 40px",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
    overflow: "hidden",
  },
  topgallery: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "0 2.2em",
    [theme.breakpoints.up("md")]: {
      padding: "0 2.2em",
    },
  },
  textvpn: {
    fontWeight: "bold",
    color: "blue",
    fontSize: "1.1em",
    textTransform: "capitalize",
  },
  button: {
    textDecoration: "none",
    marginBottom: "30px",
  },

  divSkeleton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  result: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));
