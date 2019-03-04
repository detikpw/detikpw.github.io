import React from 'react';
import { Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Body from './pages/Body';
import Menu from '../icons/Menu';
import Link from '../link';

const Footer = () => (
  <Body>
    <Flex py={2}>
      <Text
          fontFamily={400}
          fontSize=".625rem"
          lineHeight={1.2}
        >
          © 2019 Detik P Warjaya. Powered by <Link to="https://www.gatsbyjs.org/">Gatsby</Link>
        </Text>
    </Flex>
  </Body>
);

export default Footer;
