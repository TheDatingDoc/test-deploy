
import { TextField, Button, Box, Typography, Link } from "@mui/material";

const NameForm = ({ formData, setFormData, handleChange, onNext }) => {

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Call handleChange if provided, passing the event along
    if (handleChange) {
      handleChange(e);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Proceed to the next step
    onNext();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",
        margin: "auto",
        padding: "40px",
        // backgroundColor: "#1a1a1a",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 3,
        }}
      >
        SIGN UP
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name || ""}
        onChange={handleInputChange}
        required
        fullWidth
        variant="outlined"
        margin="normal"
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{
          style: { backgroundColor: "#333", color: "white" },
        }}
      />
      <TextField
        label="Email Address"
        name="email"
        value={formData.email || ""}
        onChange={handleInputChange}
        required
        fullWidth
        variant="outlined"
        margin="normal"
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{
          style: { backgroundColor: "#333", color: "white" },
        }}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password || ""}
        onChange={handleInputChange}
        required
        fullWidth
        variant="outlined"
        margin="normal"
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{
          style: { backgroundColor: "#333", color: "white" },
        }}
      />
      <TextField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword || ""}
        onChange={handleInputChange}
        required
        fullWidth
        variant="outlined"
        margin="normal"
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{
          style: { backgroundColor: "#333", color: "white" },
        }}
      />

      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{
          mt: 2,
          backgroundColor: "#f53b3b",
          color: "white",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#ff4c4c",
          },
        }}
      >
        Next
      </Button>

      <Typography
        variant="body2"
        sx={{
          color: "white",
          mt: 2,
          textAlign: "center",
        }}
      >
        Already have an account?{" "}
        <Link href="/login" sx={{ color: "#f53b3b", textDecoration: "none" }}>
          Log in!
        </Link>
      </Typography>
    </Box>
  );
};

export default NameForm;
