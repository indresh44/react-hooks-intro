import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  paper: {
    background: "black",
    color: "white",
  },
  selectedItem: {
    background: "white",
    color: "black",
  },
  item: {
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
});

const menuItem = [
  { name: "Home", to: "/" },
  { name: "Fetching Data", to: "/fetchingdata" },
  { name: "Topics", to: "/topics" },
  { name: "Play", to: "/play" },
];

export default function LayoutDrawer(props) {
  const classes = useStyles();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    props.setOpen(open);
  };

  return (
    <div>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor="left"
        open={props.open}
        onClose={toggleDrawer(false)}
      >
        <List>
          {menuItem.map((item, index) => (
            <ListItem
              button
              classes={{
                root:
                  props.currentPage === item.to
                    ? classes.selectedItem
                    : classes.item,
              }}
              component={Link}
              to={item.to}
              key={item.name}
              onClick={() => {
                props.setOpen(false);
                console.log(props.currentPage);
              }}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
