import React from 'react';
import { Flex, Button } from 'rebass';
import Navbar from './Navbar';
import SidebarItem from './SidebarItem';
import CloseIcon from '../icons/Close';

export default ({ onCloseSidebar, isSidebarOpen }) => (
  <>
    {isSidebarOpen && <Flex
        bg="white"
        width={1}
        px={3}
        justifyContent="center"
        flexDirection="column"
        css={{
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: 250,
        }}
    >
      <Button
          bg="white"
          onClick={onCloseSidebar}
          css={{
              height: '60px'
          }}
          width={1/6}
      >
        <CloseIcon />
      </Button>
      <Navbar>
        <SidebarItem to="/">
          Home
        </SidebarItem>
      </Navbar>
      <Navbar title="tags">
        <SidebarItem to="/">
          asdf
        </SidebarItem>
        <SidebarItem to="/">
          qwerty
        </SidebarItem>
      </Navbar>
    </Flex>}
  </>
);
