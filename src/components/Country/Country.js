import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { CountryAction } from "../../actions";
import { Spinner } from "../../util/Spinner";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1.5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    width: theme.spacing(31),
    minHeight: theme.spacing(22),
    margin: theme.spacing(2),
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(15),
  },
  country: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: theme.spacing(1),
    textDecoration: "none",
  },
  progress: {
    backgroundColor: "#000",
    marginTop: theme.spacing(1),
  },
}));

function Country() {
  const classes = useStyles();
  const { loading, data } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CountryAction());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {loading ? Spinner() : null}
      <Grid container spacing={3}>
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <Link
                className={classes.country}
                to={{
                  pathname: `/country/${item?.country}`,
                  state: {
                    item,
                    name: "dsfdsf",
                  },
                }}
              >
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Avatar
                      src={item?.countryInfo?.flag}
                      className={classes.large}
                      variant="square"
                    />
                    <Typography className={classes.country}>
                      {item?.country}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={item?.active}
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
