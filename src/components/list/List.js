import React from 'react';
import { Box } from 'rebass';

const List = ({ children }) => (
    <Box
        as="ul"
        mb={2}
        pl={0}
    >
        {children}
    </Box>
);

export default List;
