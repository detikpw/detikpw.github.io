import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share';

const StyledSocialIcon = styled(SocialIcon)`
  height: 32px !important;
  width: 32px !important;
`;

const Share = ({ url }) => (
  <Flex py={1}>
    <Box mr={2}>
      <TwitterShareButton url={url}>
        <StyledSocialIcon network="twitter" bgColor="#000" />
      </TwitterShareButton>
    </Box>
    <Box mr={2}>
      <FacebookShareButton url={url}>
        <StyledSocialIcon network="facebook" bgColor="#000" />
      </FacebookShareButton>
    </Box>
    <Box mr={2}>
      <WhatsappShareButton url={url}>
        <StyledSocialIcon network="whatsapp" bgColor="#000" />
      </WhatsappShareButton>
    </Box>
  </Flex>
);

export default Share;