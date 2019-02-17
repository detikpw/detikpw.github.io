import React from 'react';
import { Text } from 'rebass';
import Link from '../link';
import ListItem from '../list/ListItem';

const SidebarItem = ({ children, to }) => (
  <ListItem>
    <Link to={to} withTextDecoration={false}>
      <Text
        fontWeight={600}
        lineHeight={1.2}
      >
        {children}
      </Text>
    </Link>
  </ListItem>
);

export default SidebarItem;
