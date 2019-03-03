import React from 'react';
import { Box } from 'rebass';

const Body = ({ children }) => (
  <Box
    px={3}
    alignSelf="justify"
  >
    {children}
  </Box>
);

export default Body;
