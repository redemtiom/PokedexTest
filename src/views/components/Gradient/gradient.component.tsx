import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import type {PropsWithChildren} from 'react';

import {styles} from './gradient.styles';

const Gradient = ({children}: PropsWithChildren<{}>) => {
  return (
    <LinearGradient
      colors={[
        '#C8EAE8',
        '#B4E4E1',
        '#A0DDD7',
        '#6CD1CE',
        '#4CC7C5',
        '#21CBCA',
      ]}
      start={{x: 0.0, y: 0.5}}
      end={{x: 1.0, y: 0.5}}
      locations={[0.1, 0.2, 0.4, 0.8, 0.95, 1.0]}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
