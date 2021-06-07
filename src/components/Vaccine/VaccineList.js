import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    marginTop: theme.spacing(5),
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    textAlign: "left",
    fontFamily: "Segoe UI",
  },
  subtitle: {
    fontSize: 16,
    marginTop: theme.spacing(2),
    textAlign: "left",
    fontFamily: "revert",
  },
  chip: {
    background: "linear-gradient(45deg, #253898 30%, #253898 90%)",
    color: "#fff"
  }
}));

function VaccineList() {
  const classes = useStyles();
  const locations = useLocation();
  const data = locations?.state?.data;
  const valid_phase = locations?.state?.valid_phase;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {data &&
        data?.map((item, index) =>
          item?.trialPhase === valid_phase ? (
            <div>
              <Accordion
                className={classes.accordion}
                expanded={expanded === index}
                onChange={handleChange(index)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Chip
                    size="medium"
                    label={item?.candidate}
                    className={classes.chip}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item>
                    <Typography className={classes.title}>
                      {item?.mechanism}
                    </Typography>
                    <Typography className={classes.subtitle}>
                      {item?.details}
                    </Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </div>
          ) : null
        )}
    </div>
  );
}

export default VaccineList;
