import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { DateTime } from "../../util";
import CountryTable from "./CountryTable";
import CountryChart from "./CountryChart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  chart: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: '14px',
    marginLeft: theme.spacing(1.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(15),
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#1976d2",
    marginTop: theme.spacing(1),
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: 18,
    marginTop: theme.spacing(1),
  },
}));

function CountryList() {
  const classes = useStyles();
  const locations = useLocation();
  // console.log(locations)
  const data = locations.state.item;
  return (
    <div className={classes.root}>
      <Grid container spacing={1} style={{ marginLeft: 8 }}>
        <Grid item xs={8}>
          <Paper className={classes.chart}>
            <CountryChart data={data} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Avatar
              src={data?.countryInfo?.flag}
              className={classes.large}
              variant="square"
            />
            <Typography className={classes.title}>{data?.country}</Typography>
            <Typography className={classes.subtitle}>
              {DateTime(data?.updated)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <CountryTable data={data} />
    </div>
  );
}

export default CountryList;
