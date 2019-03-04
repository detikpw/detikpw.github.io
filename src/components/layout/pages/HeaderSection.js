import React from 'react';
import { Box } from 'rebass';
import Mobile from '../../devices/Mobile';

const HeaderSection = ({ children }) => (
  <Mobile>
    {
      isMobile => (
        <Box
          pt={2}
          css={{
            borderTop: isMobile ? '3px solid rgb(0, 0, 0)' : undefined
          }}
        >
          {children}
        </Box>
      )
    }
  </Mobile>
);

export default HeaderSection;
