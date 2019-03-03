import React from 'react';
import { Text } from 'rebass';

const PageHeader = ({ children, as }) => (
  <Text
    as={as}
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
PageHeader.defaultProps = {
  as: 'h2'
}
export default PageHeader;
