import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function UnderDevelopmentScreen() {
  return (
    <View style={styles.wrapper}>
      <Text>Сторінка в розробці</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
