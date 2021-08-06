import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Topics from "./components/Topics";
import RandomHooksPlay from "../App";
import Login from "../Login";
import Regisiter from "../Register";
import Fetch from "../dataFetching/Fetch";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavbarButtton from "./components/NavbarButtton";
import Hidden from "@material-ui/core/Hidden";
import LayoutDrawer from "./components/LayoutDrawer";
import MenuIcon from "@material-ui/icons/Menu";

// import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

function usePageViews(setCurrentPage) {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
    setCurrentPage(location.pathname);
  }, [location]);
}

export default function App() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState("/");
  const [openDrawer, setOpenDrawer] = useState(false);

  usePageViews(setCurrentPage);

  return (
    <div>
      <CssBaseline />
      <AppBar color="secondary" position="relative">
        <Toolbar>
          <Hidden mdUp>
            <Button onClick={() => setOpenDrawer(true)}>
              <MenuIcon color="action" />
            </Button>
          </Hidden>
          <Typography variant="h6" noWrap className={classes.grow}>
            React Hooks Intro
          </Typography>
          <Hidden smDown>
            <NavbarButtton
              to="/"
              name="Home"
              setPage={setCurrentPage}
              isCurrent={"/" === currentPage ? true : false}
            />
            <NavbarButtton
              to="/fetchingdata"
              name="Fetching Data"
              setPage={setCurrentPage}
              isCurrent={"/fetchingdata" === currentPage ? true : false}
            />
            <NavbarButtton
              to="/topics"
              name="Topics"
              setPage={setCurrentPage}
              isCurrent={"/topics" === currentPage ? true : false}
            />
            <NavbarButtton
              to="/play"
              name="Play"
              setPage={setCurrentPage}
              isCurrent={"/play" === currentPage ? true : false}
            />
          </Hidden>
          <LayoutDrawer
            open={openDrawer}
            setOpen={setOpenDrawer}
            currentPage={currentPage}
          />
          <Button
            variant="outlined"
            component={Link}
            to="/login"
            style={{ marginLeft: "40px" }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/register"
            style={{ marginLeft: "2px" }}
          >
            Regisiter
          </Button>
        </Toolbar>
      </AppBar>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/play">
          <RandomHooksPlay />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/fetchingdata">
          <Fetch />
        </Route>
        <Route path="/register">
          <Regisiter />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}
