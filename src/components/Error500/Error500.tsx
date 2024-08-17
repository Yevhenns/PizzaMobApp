import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Error500() {
  return (
    <View style={styles.modal}>
      <Text style={styles.text}>Щось пішло не так!</Text>
      <Text style={styles.text}>Будь ласка завітайте пізніше</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    alignItems: 'center',
  },

  text: {
    color: 'black',
  },
});
