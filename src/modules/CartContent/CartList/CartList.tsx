import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {CartListItem} from './CartListItem/CartListItem';
import {Button} from '../../../UI/Button/Button';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {addOrderSum, getFilteredCart} from '../../../redux/cart/cartSlice';
import {StyleSheet} from 'react-native';

interface CartListProps {
  deleteCartItem: (cart_id: string) => void;
  deleteAllProducts: () => void;
}

export function CartList({deleteCartItem, deleteAllProducts}: CartListProps) {
  const filteredCart = useAppSelector(getFilteredCart);

  let sum = 0;
  filteredCart.forEach(item => (sum += item.totalPrice));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addOrderSum(sum));
  }, [dispatch, sum]);

  return (
    <View style={css.cartList}>
      {filteredCart.map(data => {
        return (
          <CartListItem
            key={data.cart_id}
            deleteCartItem={deleteCartItem}
            data={data}
          />
        );
      })}
      <Text style={css.totalPayment}>До оплати {sum} грн</Text>
      <Button onPress={deleteAllProducts}>
        <Text style={css.buttonText}>Очистити кошик</Text>
      </Button>
    </View>
  );
}

const css = StyleSheet.create({
  cartList: {
    display: 'flex',
    gap: 5,
    marginBottom: 20,
  },
  totalPayment: {
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
