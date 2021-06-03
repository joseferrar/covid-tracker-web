import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";


const useStyles = makeStyles((theme) => ({
  page: {
    width: "100%",
    padding: theme.spacing(3),
    marginTop: theme.spacing(5)
  },
  root: {
    flexGrow: 1,
    display: "flex",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* app bar */}
      <Header />
      {/* side drawer */}
      {/* <DrawerLayout /> */}

      {/* main content */}
      <div className={classes.page}>{children}</div>
    </div>
  );
}
