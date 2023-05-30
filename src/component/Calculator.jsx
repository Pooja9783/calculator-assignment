import React, { useState } from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import InputField from "./InputField";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from '../style/styles.js'



const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [displayHistory, setDisplayHistory] = useState(false);

  // Input field functionality
  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Calculation functionality
  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setInput(calculatedResult.toString());
      setHistory((prevHistory) => [
        ...prevHistory,
        input + " = " + calculatedResult,
      ]);
    } catch (error) {
      setInput("Error");
    }
  };

  // History functionality
  const showHistory = () => {
    let historyInput = history.join("\n");
    let result = "";
    try {
      result = eval(historyInput);
    } catch (error) {
      result = "Error";
    }
    setDisplayHistory(!displayHistory);
  };

  // Clear input field
  const clearInput = () => {
    setInput("");
    setHistory([]);
  };

  // Remove last number
  const removeLastCharacter = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

 
  return (
    <>
      <Typography variant="h3" my={5}>
        Calculator
      </Typography>

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4} lg={4} p={2} sx={{ borderRadius: "4px" }}>
          <Paper sx={styles.paper}>
            <Grid border="2px solid gray" borderRadius="4px" p={2}>
              <Typography variant="h5" textAlign="left">
                {displayHistory ? (
                  <>
                    {history.map((item, index) => (
                      <Typography variant="body2" key={index}>
                        {item}
                      </Typography>
                    ))}
                  </>
                ) : null}
              </Typography>
              <InputField input={input} />
            </Grid>
            <Grid container spacing={1} style={{ marginTop: "1rem" }}>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  sx={styles.button}
                  fullWidth
                  onClick={() => handleInput("1")}
                >
                  1
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={() => handleInput("2")}
                >
                  2
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={() => handleInput("3")}
                >
                  3
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.backButton}
                  onClick={removeLastCharacter}
                >
                  <KeyboardBackspaceIcon />
                </Button>
              </Grid>

              <Grid item xs={3}>
                <Button
                  variant="contained"
                  sx={styles.button}
                  fullWidth
                  onClick={() => handleInput("4")}
                >
                  4
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={() => handleInput("5")}
                >
                  5
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={() => handleInput("6")}
                >
                  6
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.operatorButton}
                  onClick={() => handleInput("+")}
                >
                  +
                </Button>
              </Grid>

              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={() => handleInput("7")}
                >
                  7
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={() => handleInput("8")}
                >
                  8
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.button}
                  onClick={() => handleInput("9")}
                >
                  9
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.operatorButton}
                  onClick={() => handleInput("-")}
                >
                  -
                </Button>
              </Grid>

              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.operatorButton}
                  onClick={() => handleInput(".")}
                >
                  .
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.operatorButton}
                  onClick={() => handleInput("0")}
                >
                  0
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.operatorButton}
                  onClick={() => handleInput("/")}
                >
                  /
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.operatorButton}
                  onClick={() => handleInput("*")}
                >
                  *
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.equalButton}
                  onClick={calculateResult}
                >
                  =
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.clearButton}
                  onClick={clearInput}
                >
                  Clear
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={styles.historyButton}
                  onClick={showHistory}
                >
                  {displayHistory ? "Hide History" : "Show History"}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Calculator;
