import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { Avatar } from "@material-ui/core";
import logo from "../../assets/images/vaccine.jpg";
import { useSelector, useDispatch } from "react-redux";
import { VaccineAction } from "../../actions";
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
    width: theme.spacing(30),
    height: theme.spacing(15),
  },
  country: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: theme.spacing(1),
    textDecoration: "none",
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: 18,
    marginTop: theme.spacing(1),
  },
}));

function Vaccine() {
  const classes = useStyles();
  const { loading, data } = useSelector((state) => state.vaccine);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(VaccineAction());
  }, [dispatch]);
  //   console.log(data);
  return (
    <div className={classes.root}>
      {loading ? Spinner() : null}
      <Grid container spacing={3}>
        {data &&
          data?.phases?.map((item, index) => (
            <div key={index}>
              <Link
                className={classes.country}
                to={{
                  pathname: `/vaccine/${item?.candidates}`,
                  state: {
                    data: data?.data,
                    valid_phase: item?.phase,
                    name: "dsfdsf",
                  },
                }}
              >
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Avatar
                      src={logo}
                      className={classes.large}
                      variant="square"
                    />
                    <Typography className={classes.country}>
                      {item?.phase}
                    </Typography>
                    <Chip
                      size="medium"
                      label={item?.candidates}
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

export default Vaccine;
