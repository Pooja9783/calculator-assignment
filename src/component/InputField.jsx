import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";

export default function InputField({ input }) {
  return (
    <Grid>
      <TextField value={input} variant="outlined" fullWidth />
    </Grid>
  );
}
