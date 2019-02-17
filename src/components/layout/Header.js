import React, { Component } from 'react';
import { Box, Button,  Flex, Text, Card } from 'rebass';
import Menu from '../icons/Menu';

export default class Header extends Component {

  render() {
    const { onOpenSidebar, onCloseSidebar } = this.props;
    return (
      <Card
        boxShadow="0 1px 0 rgba(0,0,0,0.15)"
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
            <Text
              fontFamily="Exo"
              fontWeight="bold"
            >
              Catatan Detik
            </Text>
          </Box>
        </Flex>
      </Card>
    );
  }
};
