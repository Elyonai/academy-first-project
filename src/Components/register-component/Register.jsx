import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      // toast.error("Passwords do not match");
      console.log("Passwords do not match");
    } else {
      try {
        const res = await axios.post("http://localhost:4000/users", {
          name,
          email,
          password,
        });
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      } catch (e) {
        console.log(e);
      }
      // dispatch(register(userData));
    }
  };
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h1>Register Component</h1>
          <TextField
            className="input-field"
            id="name"
            label="Name"
            variant="standard"
            name="name"
            value={name}
            onChange={onChange}
          />{" "}
          <br />
          <TextField
            className="input-field"
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            value={email}
            onChange={onChange}
          />
          <br />
          <TextField
            className="input-field"
            id="standard-basic"
            label="Password"
            variant="standard"
            name="password"
            value={password}
            onChange={onChange}
          />
          <br />
          <TextField
            className="input-field"
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </Box>
        <Button onClick={onSubmit} variant="contained">
          Send
        </Button>
      </div>
    </Grid>
  );
}
