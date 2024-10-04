import React from 'react';
import {View} from 'react-native';

import type { DimensionValue } from 'react-native';

import {styles} from './sized-box.styles';

const SizedBox = ({
  width,
  height,
  color,
}: {
  width?: DimensionValue;
  height?: DimensionValue;
  color?: string;
}) => {
  const {container} = styles({height, width, color});
  return <View style={container} />;
};

export default SizedBox;
