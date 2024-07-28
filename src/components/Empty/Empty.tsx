import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';

export function Empty() {
  return (
    <View style={styles.emptyCart}>
      <Image
        source={require('../../assets/empty.png')}
        alt="empty"
        width={236}
        height={257}
      />
      <Text>Тут нічого немає!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCart: {
    alignItems: 'center',
    gap: 10,
    padding: 20,
  },
});
