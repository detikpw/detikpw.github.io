import React, { Component } from 'react';
import { Box, Button,  Flex, Text, Card } from 'rebass';

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
                    justifyContent="center"
                    flexDirection="row"
                    css={{
                        height: '40px'
                    }}
                >
                    <Box alignSelf="center" width={1/6}>
                        <Button px={0} bg="white" onClick={onOpenSidebar}>
                            <svg width="16" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h20v2H0V0zm0 6h20v2H0V6zm0 6h20v2H0v-2z" fill="#000000" fillRule="evenodd" />
                            </svg>
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
                    <Box alignSelf="center" width={1/6}>
                        Test
                    </Box>
                </Flex>
            </Card>
        );
    }
};