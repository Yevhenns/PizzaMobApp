import {StyleSheet} from 'react-native';

export const productQuantityCSS = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
  },
  quantitySet: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
  },
});
