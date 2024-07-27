import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export const ChevronLeft = ({color}) => {
  return (
    <View style={styles.container}>
      <Svg stroke-width="0" viewBox="0 0 28 48" width={24} height={24}>
        <Path
          d="M26.2583 1.53454C26.9194 2.19716 27.2908 3.09574 27.2908 4.03268C27.2908 4.96962 26.9194 5.8682 26.2583 6.53082L8.8027 24.0213L26.2583 41.5118C26.9007 42.1783 27.2561 43.0708 27.2481 43.9973C27.24 44.9237 26.8692 45.81 26.2153 46.4651C25.5615 47.1202 24.6771 47.4918 23.7525 47.4999C22.8278 47.5079 21.9371 47.1518 21.272 46.5081L11.2976 36.5138L1.32325 26.5195C0.662153 25.8569 0.290771 24.9583 0.290771 24.0213C0.290771 23.0844 0.662153 22.1858 1.32325 21.5232L21.272 1.53454C21.9333 0.872125 22.8301 0.5 23.7651 0.5C24.7002 0.5 25.597 0.872125 26.2583 1.53454Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
