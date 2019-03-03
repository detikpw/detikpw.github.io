import React from 'react';
import { Box } from 'rebass';

const HeaderSection = ({ children }) => (
  <Box
    pt={2}
    css={{
      borderTop: '3px solid rgb(0, 0, 0)'
    }}
  >
    {children}
  </Box>
);

export default HeaderSection;
