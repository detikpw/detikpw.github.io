import React from 'react';
import { Link as RebassLink } from 'rebass';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, withTextDecoration, ...props }) => {
  const isInternal = /^\/(?!\/)/.test(to);
  const customTo = {
    [isInternal ? 'to' : 'href']: to
  }
  return (
    <RebassLink
      {...props}
      {...customTo}
      target={isInternal ? undefined : '_blank'}
      as={isInternal ? GatsbyLink : 'a'}
      color='black'
      css={{
        'text-decoration': withTextDecoration ? undefined : 'none',
      }}
    >
      {children}
    </RebassLink>
  );
}

Link.defaultProps = {
    withTextDecoration: true
}

export default Link;
