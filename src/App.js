/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import "./App.css";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

import styles from "./assets/jss/appStyle";

import mumbleRequest from "./request/mumbleRequest";

const useStyles = styles;

const App = props => {
  const { initialValue, initialResponse } = props;
  const classes = useStyles();
  const [value, setValue] = useState(initialValue || "");
  const [response, setResponse] = useState(initialResponse || "");

  const mumbleHandler = async () => {
    const mumbleResponse = await mumbleRequest(value);
    setResponse(mumbleResponse.result);
  };

  const mumbleOnChange = event => {
    setValue(event.target.value);
  };

  return (
    <div data-test="component-app" className="App">
      <header className="App-header">
        <Card className={classes.card}>
          <CardHeader
            data-test="card-header"
            title="Mumbling"
            subheader="The Official App"
          />
          <CardContent>
            <Input
              data-test="mumble-input"
              dataTest="mumble-input"
              label="What should I Mumble?"
              readOnly={false}
              value={value}
              change={mumbleOnChange}
            />
            <Button data-test="mumble-button" submit={mumbleHandler} />
            {response ? (
              <Input
                label="Mumbled"
                data-test="mumble-output"
                dataTest="mumble-output"
                readOnly
                value={response}
              />
            ) : null}
          </CardContent>
        </Card>
      </header>
    </div>
  );
};

App.propTypes = {
  initialValue: PropTypes.string,
  initialResponse: PropTypes.string
};

export default App;
