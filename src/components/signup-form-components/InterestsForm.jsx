
import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InterestsForm = ({ formData, setFormData, handleChange, handleSubmit }) => {
  const [selectedInterests, setSelectedInterests] = useState(formData.interests || []);
  const navigate = useNavigate();

  const handleSelect = (interest) => {
    const newSelection = selectedInterests.includes(interest)
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest];

    setSelectedInterests(newSelection);
    setFormData({ ...formData, interests: newSelection }); // Update formData with selected interests
    handleChange({ target: { name: 'interests', value: newSelection } });
  };

  const categories = {
    'Arts & Culture': ['Painting & Drawing', 'Ballet', 'Sculpture', 'Photography', 'Classical Music', 'Modern Art', 'Theatre', 'Film & Cinema', 'Literature', 'Museums & Galleries', 'Opera'],
    'Music & Entertainment': ['Pop', 'Rock', 'Jazz & Blues', 'Country', 'House', 'EDM', 'Hip-Hop/Rap', 'Indie', 'Folk', 'K-pop', 'Techno', 'Reggae', 'World Music', 'Podcasts', 'Stand-up Comedy'],
    'Food & Drink': ['Cooking/Baking', 'Wine Tasting', 'Craft Beer', 'Vegetarian/Vegan Cooking', 'International Cuisines', 'Coffee Enthusiast', 'Mixology'],
    'Sports & Fitness': ['Running/Jogging', 'Golf', 'Yoga/Pilates', 'Cycling', 'Swimming', 'Team Sports', 'Martial Arts', 'Outdoor Adventure', 'Tennis', 'Gym/Weight Training'],
    'Outdoors & Nature': ['Hiking', 'Camping', 'Fishing', 'Bird Watching', 'Gardening', 'Wildlife Photography', 'Environmental Conservation'],
    'Travel & Adventure': ['Backpacking', 'Cultural Exploration', 'Luxury Travel', 'Road Trips', 'Eco-tourism', 'Adventure Sports'],
    'Technology & Gaming': ['Video Gaming', 'Board Games/Puzzles', 'Coding/Programming', 'Robotics', 'Gadget Enthusiast'],
    'Social & Lifestyle': ['Book Clubs', 'Wine Clubs', 'Dance Classes', 'Language Learning', 'Pet Ownership', 'Fashion & Style', 'DIY and Crafts', 'Volunteering/Charity Work'],
    'Science & Education': ['Astronomy', 'Biology', 'Chemistry', 'Physics', 'History', 'Philosophy', 'Psychology', 'Environmental Science'],
    'Business & Finance': ['Entrepreneurship', 'Investing', 'Real Estate', 'Economics', 'Personal Finance'],
    'Spiritual & Philosophical': ['Meditation', 'Yoga', 'Spirituality', 'Philosophy', 'Mindfulness Practices'],
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  }

  return (
    <Box
      sx={{
        padding: '20px',
        color: 'white',
        maxWidth: '1200px',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: '150px',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        What are your interests?
      </Typography>
      <Typography variant="h5" sx={{ color: '#B3B3B3', mb: 8 }}>
        You can choose up to 5 things.
      </Typography>

      {/* Render categories and interests */}
      <Grid container spacing={4} justifyContent="center">
        {Object.keys(categories).map((category) => (
          <Grid item xs={12} md={4} key={category}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 'bold', textAlign: 'left' }} 
            >
              {category}
            </Typography>
            <Grid container spacing={1} direction="row">
              {categories[category].map((interest) => (
                <Grid item key={interest}>
                  <Button
                    onClick={() => handleSelect(interest)}
                    sx={{
                      textTransform: 'none',
                      backgroundColor: selectedInterests.includes(interest)
                        ? '#ff5555'
                        : 'transparent !important',
                      color: 'white !important',
                      border: '0.5px solid white !important', 
                      borderRadius: '24px',
                      padding: '4px 8px',
                      minWidth: '100px',  
                      maxWidth: '150px',  
                      '&:hover': {
                        backgroundColor: selectedInterests.includes(interest)
                          ? '#555 !important'
                          : '#444 !important',
                      },
                      fontSize: '12px',  
                      textAlign: 'center',
                    }}
                  >
                    {interest}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Button
        onClick={handleSubmit}
        variant="contained"
        disabled={selectedInterests.length === 0 || selectedInterests.length > 5}
        sx={{
          mt: 4,
          backgroundColor: '#ff5555',
          fontWeight: 'bold',
        }}
      >
        Next
      </Button>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: '#B3B3B3', textDecoration: 'none', cursor: 'pointer' }}
          onClick={goToDashboard}
        >
          Skip for now.
        </Typography>
      </Box>
    </Box>
  );
};

export default InterestsForm;
