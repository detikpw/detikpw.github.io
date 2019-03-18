import React from 'react';
import { Flex, Text } from 'rebass';
import Body from './pages/Body';
import Link from '../link';

const Footer = () => (
  <Body>
    <Flex py={4}>
      <Text
          fontFamily={400}
          fontSize=".625rem"
          lineHeight={1.2}
        >
          © 2019 Detik P Warjaya. Powered by <Link to="https://www.gatsbyjs.org/">Gatsby</Link>
          &nbsp; inspired by jekyll theme <Link to="https://github.com/mmistakes/so-simple-theme">
          So Simple Theme </Link> and <Link to="https://www.vice.com">vice.com</Link>
        </Text>
    </Flex>
  </Body>
);

export default Footer;
