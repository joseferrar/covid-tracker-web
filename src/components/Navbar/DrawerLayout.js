import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { NavLink, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../../assets/images/Covid.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `url(${"https://images3.alphacoders.com/100/1006696.png"})`
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  img: {
    width: 160,
    height: 160,
    marginTop: theme.spacing(-6),
    marginLeft: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle: {
    color: '#fff'
  }
}));

function DrawerLayout({ open, handleDrawerToggle, container }) {
  const theme = useTheme();
  const classes = useStyles();
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div style={{paddingBottom: 20}}>
      <Avatar alt="Remy Sharp" src={logo} className={classes.img} />
      <Typography variant="h6" align="center" className={classes.title}>Covid Tracker App</Typography>
      <Typography variant="body2" align="center" className={classes.subtitle}>@Krypton Hackers</Typography>
      </div>
      <Divider />
      <List>
        <NavLink
        exact
          to={`/`}
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'teal' }}
        >
          <ListItem button>
            <ListItemIcon  className={classes.subtitle}>
              <i class="fas fa-home"></i>
            </ListItemIcon>
            <ListItemText primary={"Home"} className={classes.subtitle} />
          </ListItem>
        </NavLink>

        <NavLink
        exact
          to={`/about`}
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: "teal" }}
        >
          <ListItem button>
            <ListItemIcon  className={classes.subtitle}>
              <i class="fas fa-user"></i>
            </ListItemIcon>
            <ListItemText primary={"About"} className={classes.subtitle} />
          </ListItem>
        </NavLink>

        <NavLink
          to={`/countries`}
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'teal' }}
        >
          <ListItem button>
            <ListItemIcon  className={classes.subtitle}>
              <i class="fas fa-globe"></i>
            </ListItemIcon>
            <ListItemText primary={"Countries"} className={classes.subtitle} />
          </ListItem>
        </NavLink>

        <NavLink
          to={`/vaccine`}
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'teal' }}
        >
          <ListItem button>
            <ListItemIcon  className={classes.subtitle}>
              <i class="fas fa-first-aid"></i>
            </ListItemIcon>
            <ListItemText primary={"Vaccine"} className={classes.subtitle}/>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default DrawerLayout;
