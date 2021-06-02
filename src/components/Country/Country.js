import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { CountryAction } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    width: theme.spacing(31),
    minHeight: theme.spacing(22),
    margin: theme.spacing(2),
    backgroundColor: "#282829",
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(15),
  },
  country: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: theme.spacing(1),
    textDecoration: "none",
  },
  progress: {
    backgroundColor: "#fff",
    marginTop: theme.spacing(1),
  },
}));

function Country() {
  const classes = useStyles();
  const { data } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(CountryAction());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <h1>country</h1>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <div key={index}>
            <Link
            className={classes.country}
              to={{
                pathname: `/country/${item.country}`,
                state: {
                  item,
                  name: "dsfdsf",
                },
              }}
            >
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <Avatar
                    src={item.countryInfo.flag}
                    className={classes.large}
                    variant="square"
                  />
                  <Typography className={classes.country}>
                    {item.country}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={item.active}
                    className={classes.progress}
                    color="primary"
                  />
                </Paper>
              </Grid>
            </Link>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default Country;
