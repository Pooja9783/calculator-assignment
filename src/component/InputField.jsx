import React from "react";
import { Grid, TextField } from "@mui/material";

export default function InputField({ input }) {
  return (
    <Grid>
      <TextField
        value={input}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        fullWidth
      />
    </Grid>
  );
}
