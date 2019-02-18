import React from 'react';
import { Text } from 'rebass';

const PageHeader = ({ children }) => (
  <Text
    as="h2"
    fontSize=".75rem"
    fontWeight={600}
    lineHeight={1.2}
    my={0}
    css={{
      textTransform: 'uppercase'
    }}
  >
    {children}
  </Text>
);

export default PageHeader;
