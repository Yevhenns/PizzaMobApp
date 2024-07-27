import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  mainContent: {
    width: '100%',
    flexDirection: 'row',
    gap: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  totalPrice: {
    flexBasis: 65,
  },
  deleteButton: {
    flexBasis: 32,
  },
});
