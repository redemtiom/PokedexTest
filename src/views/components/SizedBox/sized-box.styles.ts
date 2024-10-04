import {StyleSheet} from 'react-native';

import type { DimensionValue } from 'react-native';

export const styles = ({
  height,
  width,
  color = 'transparent',
}: {
  height?: DimensionValue;
  width?: DimensionValue;
  color?: string;
}) =>
  StyleSheet.create({
    container: {
      height,
      width,
      backgroundColor: color,
    },
  });
