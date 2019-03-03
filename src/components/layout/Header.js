import React from 'react';
import { Box, Button,  Flex, Text, Card } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Menu from '../icons/Menu';
import Link from '../link';

const header = ({ onOpenSidebar }) => data => (
  <Card
    width={1}
    boxShadow="0 1px 0 rgba(0,0,0,0.15)"
    bg="white"
    css={{
      position: 'fixed'
    }}
  >
    <Flex
      px={3}
      alignItems="center"
      justifyContent="start"
      flexDirection="row"
      css={{
          height: '40px'
      }}
    >
      <Box alignSelf="center" width={1/6}>
        <Button px={0} bg="white" onClick={onOpenSidebar}>
          <Menu />
        </Button>
      </Box>
      <Box alignSelf="center" width={4/6}>
        <Link to="/" withTextDecoration={false}>
          <Text
            fontFamily="Exo"
            fontWeight="bold"
          >
            {data.site.siteMetadata.title}
          </Text>
        </Link>
      </Box>
    </Flex>
  </Card>
);

const Header = ({ onOpenSidebar }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }`
    }
    render={header({ onOpenSidebar })}
  />
);

export default Header;
