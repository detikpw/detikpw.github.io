// @flow

import React from 'react';
import Responsive from 'react-responsive';

type Props = { [string]: * }

export default (props: Props) => <Responsive {...props} minWidth="64em" />;
