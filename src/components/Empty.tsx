import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export function Empty() {
  return (
    <View style={styles.emptyCart}>
      <Image
        source={require('../assets/empty.png')}
        alt="empty"
        width={236}
        height={257}
      />
      <Text style={styles.text}>Тут нічого немає!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCart: {
    alignItems: 'center',
    gap: 10,
    padding: 20,
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#000000',
  },
});
