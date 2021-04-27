import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "linear-gradient(90deg, #5BB0C4 0%, #1BA386 100%)",
  },
  navbarTitle: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.navbarTitle}>Contacts</Typography>
      </Toolbar>
    </AppBar>
  );
}
