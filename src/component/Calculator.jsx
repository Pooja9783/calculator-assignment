import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import InputField from "./InputField";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState();

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
      setHistory((prevHistory) => [...prevHistory, input]);
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
    setHistory("");
  };

  const showHistory = () => {
    if (history.length === 0) {
      setInput("");
      return;
    }

    const historyInput = history.join(" ");
    let result = "";
    try {
      result = eval(historyInput);
    } catch (error) {
      result = "Error";
    }

    setInput(`${historyInput} = ${result}`);
    setResult(result);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} md={4} lg={4} p={1}>
        <Typography variant="h3" mb={3}>
          Calculator
        </Typography>

        <Paper style={{ padding: "1rem" }}>
          <Grid border="2px solid gray" borderRadius="4px" p={2}>
            <InputField input={input} />
            <Grid>
              <Typography variant="h5" textAlign="left">
                {result}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{ marginTop: "1rem" }}>
            <Grid item xs={3}>
              <Button
                variant="contained"
                sx={{
                  background: "#8741b5",
                  "&:hover": {
                    backgroundColor: "#8741b5",
                  },
                }}
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
                sx={{
                  background: "#8741b5",
                  "&:hover": {
                    backgroundColor: "#8741b5",
                  },
                }}
                onClick={() => handleInput("2")}
              >
                2
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#8741b5",
                  "&:hover": {
                    backgroundColor: "#8741b5",
                  },
                }}
                onClick={() => handleInput("3")}
              >
                3
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{ background: "#59515e" }}
                onClick={() => handleInput("+")}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                sx={{
                  background: "#8741b5",
                  "&:hover": {
                    backgroundColor: "#8741b5",
                  },
                }}
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
                sx={{
                  background: "#8741b5",
                  "&:hover": {
                    backgroundColor: "#8741b5",
                  },
                }}
                onClick={() => handleInput("5")}
              >
                5
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#8741b5",
                  "&:hover": {
                    backgroundColor: "#8741b5",
                  },
                }}
                onClick={() => handleInput("6")}
              >
                6
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{ background: "#59515e" }}
                onClick={() => handleInput("-")}
              >
                -
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#8741b5",
                  "&:hover": {
                    backgroundColor: "#8741b5",
                  },
                }}
                onClick={() => handleInput("7")}
              >
                7
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#8741b5",
                  "&:hover": {
                    backgroundColor: "#8741b5",
                  },
                }}
                onClick={() => handleInput("8")}
              >
                8
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#8741b5",
                  "&:hover": {
                    backgroundColor: "#8741b5",
                  },
                }}
                onClick={() => handleInput("9")}
              >
                9
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#59515e",
                  "&:hover": {
                    backgroundColor: "#59515e",
                  },
                }}
                onClick={() => handleInput("*")}
              >
                *
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#59515e",
                  "&:hover": {
                    backgroundColor: "#59515e",
                  },
                }}
                onClick={() => handleInput(".")}
              >
                .
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                sx={{
                  background: "#59515e",
                  "&:hover": {
                    backgroundColor: "#59515e",
                  },
                }}
                fullWidth
                onClick={() => handleInput("0")}
              >
                0
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#59515e",
                  "&:hover": {
                    backgroundColor: "#59515e",
                  },
                }}
                onClick={() => handleInput("/")}
              >
                /
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                sx={{
                  background: "#59515e",
                  "&:hover": {
                    backgroundColor: "#59515e",
                  },
                }}
                fullWidth
                onClick={calculateResult}
              >
                =
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                sx={{
                  background: "#c23e23",
                  "&:hover": {
                    backgroundColor: "#c23e23",
                  },
                }}
                fullWidth
                onClick={showHistory}
              >
                History
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contianed"
                sx={{
                  background: "#c27223",
                  "&:hover": {
                    backgroundColor: "#c27223",
                  },
                }}
                fullWidth
                onClick={() => clearInput()}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Calculator;
