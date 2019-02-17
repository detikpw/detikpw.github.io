// @flow

import type { Node } from 'react';

import React from 'react';
import Mobile from '../components/devices/Mobile';
import Layout from '../components/layout';

export default (): Node => (
    <Layout>
        <Mobile>Hello world!</Mobile>
    </Layout>
)
