import React from 'react';
import { Box } from 'rebass';

const ListItem = ({ children }) => (
    <Box
        as="li"
        mb={2}
        pl={0}
        css={{
          'list-style-type': 'none'
        }}
    >
        {children}
    </Box>
);

export default ListItem;
