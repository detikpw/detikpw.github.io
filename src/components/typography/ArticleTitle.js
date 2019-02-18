import React from 'react';
import { Text } from 'rebass';

const ArticleTitle = ({ children }) => (
  <Text
    as="h2"
    fontSize="1rem"
    fontWeight={600}
    lineHeight={1.2}
    mt={0}
    mb={2}
  >
    {children}
  </Text>
);

export default ArticleTitle;
