import React from 'react';
import {View, Text} from 'react-native';

export function Error500() {
  return (
    <View>
      <View>
        <Text>Щось пішло не так!</Text>
        <Text>Перезавантажте сторінку,</Text>
        <Text>або завітайте пізніше</Text>
      </View>
    </View>
  );
}
