import React from 'react';
import { Text } from 'rebass';

const PageHeader = ({ children }) => (
  <Text
    as="h1"
    fontSize="1.25rem"
    fontWeight={600}
    lineHeight={1.2}
  >
    {children}
  </Text>
);

export default PageHeader;
