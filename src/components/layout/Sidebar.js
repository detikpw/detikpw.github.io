import React from 'react';
import { Flex, Box, Button, Text } from 'rebass';
import Link from '../link';

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
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px">
                    <title/>
                    <g id="cross" style={{
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '2px',
                    }}>
                        <line x1="7" x2="25" y1="7" y2="25"/>
                        <line x1="7" x2="25" y1="25" y2="7"/>
                    </g>
                </svg>
            </Button>
            <Box>
                <Link to="test" withTextDecoration={false}>
                    <Text>
                        Text
                    </Text>
                </Link>
            </Box>
        </Flex>}
    </>
);