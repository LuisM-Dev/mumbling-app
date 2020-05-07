/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

import styles from "../../assets/jss/inputStyle";

const useStyles = styles;

const Input = props => {
  const classes = useStyles();
  const { dataTest, label, value, readOnly, change } = props;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        data-test={dataTest}
        fullWidth
        multiline
        label={label}
        className={classes.textField}
        value={value}
        onChange={event => change(event)}
        margin="normal"
        variant="outlined"
        InputProps={{ readOnly }}
      />
    </form>
  );
};

Input.propTypes = {
  dataTest: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  change: PropTypes.func
};

export default Input;
