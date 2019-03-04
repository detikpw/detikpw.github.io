import React from 'react';
import { Text } from 'rebass';
import Mobile from '../devices/Mobile';

const pageHeaderMobile = (message) => (
  <Text
    as="h1"
    fontSize="1.25rem"
    fontWeight={600}
    lineHeight={1.2}
    my={0}
  >
    {message}
  </Text>
);

const pageHeaderDesktop = (message) => (
  <Text
    as="h1"
    fontFamily="'Volkhov', serif"
    fontSize="4.25rem"
    fontWeight={400}
    lineHeight={1}
    mt={4}
    mb={3}
    textAlign="center"
    css={{ fontStyle: 'italic' }}
  >
    {message}
  </Text>
);

const PageHeader = ({ children }) => (
  <Mobile>
    { isMobile => (isMobile ? pageHeaderMobile : pageHeaderDesktop)(children)}
  </Mobile>
);

export default PageHeader;
