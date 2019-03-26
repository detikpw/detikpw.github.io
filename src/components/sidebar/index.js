import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import { map } from 'ramda';
import { sentence } from 'change-case';
import Navbar from './Navbar';
import SidebarItem from './SidebarItem';
import CloseIcon from '../icons/Close';

const renderSidebarItem = ({ fieldValue: category }) => (
  <SidebarItem key={category} to={`/${category}`}>
    {sentence(category)}
  </SidebarItem>
);
const sidebar = ({ onCloseSidebar, isSidebarOpen }) => data => (
  <Box onClick={onCloseSidebar}>
    {isSidebarOpen && <Flex
        bg="white"
        width={1}
        px={3}
        flexDirection="column"
        css={{
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: 250,
            height:'100vh'
        }}
    >
      <Button
        bg="white"
        onClick={onCloseSidebar}
        px={0}
        css={{
            height: '60px',
            textAlign: 'left'
        }}
        width={1/6}
      >
        <CloseIcon />
      </Button>
      <Navbar>
        <SidebarItem to="/">
          Home
        </SidebarItem>
        <SidebarItem to="/about-me">
          About Me
        </SidebarItem>
      </Navbar>
      <Navbar title="category">
        {map(renderSidebarItem, data.allMarkdownRemark.group)}
        <SidebarItem to="/tags/til">
          TIL
        </SidebarItem>
      </Navbar>
    </Flex>}
  </Box>
);

const Header = ({ onCloseSidebar, isSidebarOpen }) => (
  <StaticQuery
    query={graphql`
      query{
        allMarkdownRemark{
          group(field: fields___category) {
            fieldValue
          }
        }
      }`
    }
    render={sidebar({ onCloseSidebar, isSidebarOpen })}
  />
);

export default Header;
