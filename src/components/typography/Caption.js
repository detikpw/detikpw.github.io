import React from 'react';
import { Text } from 'rebass';

const Caption = ({ children, textAlign }) => (
  <Text
    fontSize=".625rem"
    fontWeight={400}
    lineHeight={1.6}
    my={0}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
export default Caption;
