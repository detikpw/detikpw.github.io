import React from 'react';
import { Text } from 'rebass';
import Link from '../link';
const NavItem = ({ children, to }) => (
  <Link to={to} mx={2}>
    <Text
      color="white"
      lineHeight={1.2}
    >
      {children}
    </Text>
  </Link>
)

export default NavItem;
