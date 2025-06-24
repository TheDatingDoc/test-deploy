import { Box, Typography, TextField, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BirthdayForm = ({ formData, setFormData, handleChange, handleNext }) => {

  const handleInputChange = (e) => {
    const birthday = e.target.value;

    // update local formData state and also call handleChange for parent
    setFormData((prevFormData) => ({
      ...prevFormData,
      birthday,
    }));

    handleChange({ target: { name: "birthday", value: birthday } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.birthday) {
      handleNext(); // proceed to the next step
    } else {
      alert("Please enter your birthday.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        // backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        When is your birthday?
      </Typography>
      <TextField
        label="Birthday"
        type="date"  // use a date input to simplify
        name="birthday"
        value={formData.birthday || ""}
        onChange={handleInputChange}
        required
        InputLabelProps={{ shrink: true }}
        sx={{
          width: "200px",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#333",
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <VisibilityIcon sx={{ color: "white", mr: 1 }} />
        <Typography variant="body2">You won’t be able to change it later.</Typography>
      </Box>

      <IconButton
        onClick={handleSubmit}
        sx={{
          mt: 4,
          backgroundColor: "#f53b3b",
          color: "white",
          fontSize: "24px",
          padding: "10px",
          "&:hover": {
            backgroundColor: "#ff4c4c",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default BirthdayForm;
