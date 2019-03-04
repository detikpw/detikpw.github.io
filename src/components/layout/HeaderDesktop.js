import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import { sentence } from 'change-case';
import { map } from 'ramda';
import NavItem from '../navs/NavItem';
import Link from '../link';

const renderNavItem = ({ fieldValue: category }) => (
  <NavItem to={`/${category}`}>
    {sentence(category)}
  </NavItem>
);

const headerDesktop = () => data => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center">
    <Flex bg="black"
      py={2}
      px={3}
      mb={4}
      css={{
        textTransform: 'uppercase',
        borderRadius: '0 0 10px 10px',
        borderTop: '5px solid #000'
      }}
    >
      {map(renderNavItem, data.allMarkdownRemark.group)}
    </Flex>
    <Link to="/" withTextDecoration={false}>
      <Text
        fontFamily="Exo"
        fontSize="2.25rem"
      >
        {data.site.siteMetadata.title}
      </Text>
    </Link>
    <Text
      fontFamily="Exo"
      fontSize="1.25rem"
      css={{
        fontStyle: 'italic'
      }}
    >
      Just A Note
    </Text>
  </Flex>
);

const HeaderDesktop = () => (
  <StaticQuery
    query={graphql`
      query{
        allMarkdownRemark{
          group(field: fields___category) {
            fieldValue
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }`
    }
    render={headerDesktop()}
  />
);

export default HeaderDesktop;
