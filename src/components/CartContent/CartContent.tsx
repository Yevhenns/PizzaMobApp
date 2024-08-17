import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import { Empty } from '../../components/Empty/Empty';
import {
  deleteItem,
  getFilteredCart,
  getIsLoading,
} from '../../redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Loader from '../Loader/Loader';
import { CartForm } from './CartForm/CartForm';
import { CartList } from './CartList/CartList';

interface CartContentProps {
  deleteAllProducts: () => void;
  openModal: () => void;
}

export function CartContent({
  deleteAllProducts,
  openModal,
}: CartContentProps) {
  const filteredCart = useAppSelector(getFilteredCart);
  const isLoading = useAppSelector(getIsLoading);

  const dispatch = useAppDispatch();

  const order: Ordered = filteredCart.map(item => {
    return {
      title: item.title,
      quantity: item.quantity,
      options: item.options,
    };
  });

  const deleteCartItem = (cart_id: string) => {
    dispatch(deleteItem(cart_id));
  };

  if (isLoading) {
    return <Loader />;
  }

  if (filteredCart.length === 0 && !isLoading) {
    return <Empty />;
  }

  return (
    <View style={css.wrapper}>
      {filteredCart.length > 0 ? (
        <>
          <CartList
            deleteCartItem={deleteCartItem}
            deleteAllProducts={deleteAllProducts}
          />
          <CartForm openModal={openModal} order={order} />
        </>
      ) : (
        <Empty />
      )}
    </View>
  );
}

const css = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
