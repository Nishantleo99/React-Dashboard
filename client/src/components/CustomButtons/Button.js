import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import '../../assets/css/dashboard.css';

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-dashboard-react/components/buttonStyle.js";

const useStyles = makeStyles(styles);
const flash = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: 'white'
  },
});

export default function RegularButton(props) {
  const classes = useStyles();
  const dots = flash(); 
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return (
    <div className="flash">
    <FlashOnOutlinedIcon className={dots.root} fontSize="small"/>
    </div>
    /*<Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>*/
  );
}

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  // use this to pass the classes props from Material-UI
  muiClasses: PropTypes.object,
  children: PropTypes.node
};
