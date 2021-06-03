import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    minHeight: theme.spacing(15),
    margin: theme.spacing(2),
    // background: "linear-gradient(45deg, #045de9 30%, #36096d 90%)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
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
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Active</Typography>
            <Typography className={classes.subtitle}>{nf.format(data.active)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>{data.country}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>{data.country}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>{data.country}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>{data.country}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CountryTable;
