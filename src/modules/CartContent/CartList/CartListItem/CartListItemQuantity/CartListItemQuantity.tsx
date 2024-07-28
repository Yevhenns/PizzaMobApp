import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../../../../redux/hooks';
import {setQuantityAndPrice} from '../../../../../redux/cart/cartSlice';
import RoundButton from '../../../../../UI/RoundButton/RoundButton';
import {ChevronLeft} from '../../../../../components/icons/ChevronLeft';
import {ChevronRight} from '../../../../../components/icons/ChevronRight';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

interface CartListItemQuantityProps {
  chosenQuantity: number;
  cart_id: string;
  price: number;
}

export function CartListItemQuantity({
  chosenQuantity,
  cart_id,
  price,
}: CartListItemQuantityProps) {
  const [quantity, setQuantity] = useState(chosenQuantity);

  const dispatch = useAppDispatch();

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const pricePerItem = price / chosenQuantity;

  useEffect(() => {
    const totalPrice = quantity * pricePerItem;
    dispatch(setQuantityAndPrice({cart_id, quantity, totalPrice}));
  }, [cart_id, dispatch, price, pricePerItem, quantity]);

  return (
    <View style={css.wrapper}>
      <RoundButton
        onPress={decrement}
        disabled={quantity === 1}
        aria-label="minus">
        <ChevronLeft color="red" />
      </RoundButton>
      <Text>{quantity}</Text>
      <RoundButton onPress={increment} aria-label="plus">
        <ChevronRight color="red" />
      </RoundButton>
    </View>
  );
}

const css = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginLeft: 'auto',
  },
});
