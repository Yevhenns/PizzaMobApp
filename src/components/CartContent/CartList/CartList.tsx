import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import { addOrderSum, getFilteredCart } from '../../../redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Button } from '../../Button';
import { CartListItem } from './CartListItem/CartListItem';

interface CartListProps {
  deleteCartItem: (cart_id: string) => void;
  deleteAllProducts: () => void;
}

export function CartList({ deleteCartItem, deleteAllProducts }: CartListProps) {
  const filteredCart = useAppSelector(getFilteredCart);

  let sum = 0;
  filteredCart.forEach(item => (sum += item.totalPrice));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addOrderSum(sum));
  }, [dispatch, sum]);

  return (
    <View style={styles.cartList}>
      {filteredCart.map(data => {
        return (
          <CartListItem
            key={data.cart_id}
            deleteCartItem={deleteCartItem}
            data={data}
          />
        );
      })}
      <Text style={styles.totalPayment}>До сплати: {sum} грн</Text>
      <Button onPress={deleteAllProducts}>Очистити кошик</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  cartList: {
    display: 'flex',
    gap: 5,
    marginBottom: 20,
  },
  totalPayment: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#000000',
  },
});
