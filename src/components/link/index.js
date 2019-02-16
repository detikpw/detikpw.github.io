import React from 'react';
import { Link as RebassLink } from 'rebass';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(RebassLink);

const Link = ({ children, withTextDecoration, ...props }) => (
    <RebassLink
        {...props}
        as={GatsbyLink}
        color='black'
        css={{
            'text-decoration': withTextDecoration ? undefined : 'none',
        }}
    >
        {children}
    </RebassLink>
);

Link.defaultProps = {
    withTextDecoration: true
}

export default Link;