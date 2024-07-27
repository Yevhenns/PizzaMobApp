import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import CartListItem from './CartListItem/CartListItem';
import Button from '../../../UI/Button/Button';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {addOrderSum, getFilteredCart} from '../../../redux/cart/cartSlice';
import {CartListCSS} from './CartList.styles';

interface CartListProps {
  deleteCartItem: (cart_id: string) => void;
  deleteAllProducts: () => void;
}

const CartList = ({deleteCartItem, deleteAllProducts}: CartListProps) => {
  const filteredCart = useAppSelector(getFilteredCart);

  let sum = 0;
  filteredCart.forEach(item => (sum += item.totalPrice));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addOrderSum(sum));
  }, [dispatch, sum]);

  return (
    <View style={CartListCSS.cartList}>
      {filteredCart.map(data => {
        return (
          <CartListItem
            key={data.cart_id}
            deleteCartItem={deleteCartItem}
            data={data}
          />
        );
      })}
      <Text style={CartListCSS.totalPayment}>До оплати {sum} грн</Text>
      <Button onPress={deleteAllProducts}>
        <Text style={CartListCSS.buttonText}>Очистити кошик</Text>
      </Button>
    </View>
  );
};

export default CartList;
