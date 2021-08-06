import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  border: {
    border: "2px",
    // borderLeft: "2px",
    // borderRight: "2px",
    // borderBottom: "2px",
    borderStyle: "inset",
    borderColor: "#f5f5f5",
  },
}));

export default function NavbarButtton(props) {
  const classes = useStyles();
  // console.log(props);
  // console.log(props.isCurrent);
  return (
    <Button
      component={Link}
      to={props.to}
      style={{
        color: "white",
      }}
      className={props.isCurrent ? classes.border : ""}
      onClick={() => props.setPage(props.to)}
    >
      {props.name}
    </Button>
  );
}
