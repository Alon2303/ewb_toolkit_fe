import React from "react";
import logo from '../logo.png';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const goToTablePage = () => {
    alert("yey")
}

function FormRow() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Button variant="contained" color="primary">
            Volunteer Management
        </Button>
        {/* <Paper className={classes.paper} style={{ backgroundColor: "#80c5c5" }}>
          Volunteer Management
        </Paper> */}
      </Grid>
      <Grid item md={2} xs={4} sm={12}>
        <Paper className={classes.paper} style={{ backgroundColor: "#90ee90" }}>
          Lalibella
        </Paper>
      </Grid>
      <Grid item md={2} xs={6} sm={12}>
        <Paper className={classes.paper} style={{ backgroundColor: "#90ee90" }}>
          Mekele
        </Paper>
      </Grid>
      <Grid item md={2} xs={6} sm={12}>
        <Paper className={classes.paper} style={{ backgroundColor: "#90ee90" }}>
          Wind
        </Paper>
      </Grid>
      <Grid item md={2} xs={6} sm={12}>
        <Paper className={classes.paper} style={{ backgroundColor: "#90ee90" }}>
          Newe Paz
        </Paper>
      </Grid>
      <Grid item md={2} xs={6} sm={12}>
        <Paper className={classes.paper} style={{ backgroundColor: "#90ee90" }}>
          R&D
        </Paper>
      </Grid>
      <Grid item md={2} xs={4} sm={12}>
        <Paper className={classes.paper} style={{ backgroundColor: "#fc804a" }}>
          Tool Kit
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

const Main = () => {
  return (
    <div>
      <Grid direction="column" justify="space-evenly" alignItems="strech">
        <header style={{ padding: "4px", backgroundColor: "#D3D3D3" }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{ paddingRight: "4vw" }}>Logout</p>
          </Grid>
        </header>
        <div style={{ marginTop: "14%" }}>
          <Grid container spacing={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              item
              spacing={4}
            >
              <FormRow />
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#3F3F3F",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            color: "white",
            textAlign: "center",
          }}
        >
          <p>
            <b>
              <i>
                <u>The Center For Global Engineering, Technon</u>
              </i>
            </b>
          </p>
        </div>
      </Grid>
    </div>
  );
};

export default Main;
