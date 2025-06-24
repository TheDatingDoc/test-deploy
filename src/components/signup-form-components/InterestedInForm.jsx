
import { Box, Typography, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const InterestedInForm = ({ formData, setFormData, handleChange, handleNext }) => {
  
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const updatedInterestedIn = formData.interestedIn.includes(value)
      ? formData.interestedIn.filter((item) => item !== value)
      : [...formData.interestedIn, value];

    // Update the formData directly
    setFormData((prevData) => ({
      ...prevData,
      interestedIn: updatedInterestedIn,
    }));

    // Call handleChange for additional handling if needed
    if (handleChange) {
      handleChange({ target: { name: "interestedIn", value: updatedInterestedIn } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.interestedIn.length > 0) {
      handleNext();
    } else {
      alert("Please select at least one option.");
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
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Who are you interested in?
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            value="Men"
            checked={formData.interestedIn.includes("Men")}
            onChange={handleCheckboxChange}
            sx={{ color: "white", '&.Mui-checked': { color: "#f53b3b" } }}
          />
        }
        label="Men"
        sx={{ color: "white" }}
      />
      <FormControlLabel
        control={
          <Checkbox
            value="Women"
            checked={formData.interestedIn.includes("Women")}
            onChange={handleCheckboxChange}
            sx={{ color: "white", '&.Mui-checked': { color: "#f53b3b" } }}
          />
        }
        label="Women"
        sx={{ color: "white" }}
      />

      <IconButton
        onClick={handleSubmit}
        sx={{
          mt: 4,
          backgroundColor: "#f53b3b",
          color: "white",
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

export default InterestedInForm;
