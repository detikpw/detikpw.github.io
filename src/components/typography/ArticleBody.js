import React from 'react';
import { Text } from 'rebass';

const ArticleBody = ({ children }) => (
  <Text
    fontSize=".875rem"
    fontWeight={400}
    lineHeight={1.6}
    mt={0}
    mb={2}
    color="rgb(85, 85, 85)"
  >
    {children}
  </Text>
);

export default ArticleBody;
