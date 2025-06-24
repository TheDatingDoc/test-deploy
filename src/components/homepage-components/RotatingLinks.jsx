import React from 'react';
import { Box } from '@mui/material';

const RotatingLinks = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '30%', 
        left: '2%', 
        width: '180px',
        height: '180px',
      }}
    >
      <svg width="180" height="180" viewBox="0 0 180 180">
        <path
          id="circlePath"
          d="M 90, 90
             m -70, 0
             a 70,70 0 1,1 140,0
             a 70,70 0 1,1 -140,0"
          fill="none"
        />
        <text fontSize="16" fill="white" style={{ fontFamily: 'Trap', fontWeight: 400 }}>
          <textPath href="#circlePath" startOffset="5%">
            MATCHMAKING
          </textPath>
        </text>
        <text fontSize="16" fill="white" style={{ fontFamily: 'Trap', fontWeight: 400 }}>
          <textPath href="#circlePath" startOffset="35%">
            EVENTS
          </textPath>
        </text>
        <text fontSize="16" fill="white" style={{ fontFamily: 'Trap', fontWeight: 400 }}>
          <textPath href="#circlePath" startOffset="65%">
            DATE COACHING
          </textPath>
        </text>
      </svg>
    </Box>
  );
};

export default RotatingLinks;