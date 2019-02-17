import React from 'react';
import { Box, Text } from 'rebass';
import List from '../list/List';

const Navbar = ({ children, title }) => (
  <Box
    pt={4}
    css={{
      fontFamily: 'HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif',
      textTransform: 'uppercase'
    }}
  >
    {title && (
      <Text
        fontFamily={400}
        fontSize=".625rem"
        lineHeight={1.2}
      >
        {title}
      </Text>
    )}
    <List>
      {children}
    </List>
  </Box>
);

export default Navbar;
