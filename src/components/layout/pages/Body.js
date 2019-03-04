import React from 'react';
import { Box } from 'rebass';

const Body = ({ children }) => (
  <Box
    px={3}
    alignSelf="center"
    width={[1, 1, 1/2]}
  >
    {children}
  </Box>
);

export default Body;
