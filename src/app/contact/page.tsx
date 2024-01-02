import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Contact = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
      className="p-4 max-w-lg mx-auto">
      <div className="w-full mb-4">
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Nom"
          defaultValue=""
          className="mb-4"
        />
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Email"
          type="email"
          defaultValue=""
          className="mb-4"
        />
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
          className="mb-4"
        />
      </div>
      <Button
        variant="contained"
        className="bg-blue-500 hover:bg-blue-700 text-white">
        Envoyer
      </Button>
    </Box>
  );
};

export default Contact;
