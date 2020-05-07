/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import styles from "../../assets/jss/buttonStyle";

const useStyles = styles;

const Btn = props => {
  const classes = useStyles();
  const { submit } = props;

  return (
    <div>
      <Button
        data-test="component-button"
        color="primary"
        className={classes.button}
        onClick={submit}
      >
        Mumble
      </Button>
    </div>
  );
};

Btn.propTypes = {
  submit: PropTypes.func
};

export default Btn;
