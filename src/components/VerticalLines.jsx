import React from 'react';
import { Box } from '@mui/material';

const VerticalLines = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '10%', 
          width: '1px',
          height: '100%',
          backgroundColor: '#A9A9A9', 
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '34%', 
          width: '1px',
          height: '100%',
          backgroundColor: '#A9A9A9',
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '64%', 
          width: '1px',
          height: '100%',
          backgroundColor: '#A9A9A9',
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '90%', 
          width: '1px',
          height: '100%',
          backgroundColor: '#A9A9A9',
          opacity: 0.3,
        }}
      />
    </>
  );
};

export default VerticalLines;