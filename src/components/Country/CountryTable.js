import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    width: theme.spacing(28),
    minHeight: theme.spacing(15),
    margin: theme.spacing(2),
  },
  paper2: {
    backgroundColor: "#282c34",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "grid",
    justifyContent: "center",
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(15),
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    fontFamily: "Segoe UI",
    marginTop: theme.spacing(1),
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: 24,
    marginTop: theme.spacing(1),
  },
}));

function CountryTable(props) {
  const classes = useStyles();
  const { data } = props;
  const nf = Intl.NumberFormat();
  console.log(data);
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Active</Typography>
            <Typography className={classes.subtitle}>
              {nf.format(data?.active)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Cases</Typography>
            <Typography className={classes.subtitle}>
              {nf.format(data?.cases)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Critical</Typography>
            <Typography className={classes.subtitle}>
              {nf.format(data?.critical)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Deaths</Typography>
            <Typography className={classes.subtitle}>
              {nf.format(data?.deaths)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Recovered</Typography>
            <Typography className={classes.subtitle}>
              {nf.format(data?.recovered)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Tests</Typography>
            <Typography className={classes.subtitle}>
              {nf.format(data?.tests)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Population</Typography>
            <Typography className={classes.subtitle}>
              {nf.format(data?.population)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CountryTable;
