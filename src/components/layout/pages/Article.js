import React from 'react';
import { Box } from 'rebass';

const Article = ({ children }) => (
  <Box
    css={{ lineHeight: 1.6 }}
  >
    <div dangerouslySetInnerHTML={{ __html: children }} />
  </Box>
);

export default Article;
