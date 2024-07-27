import React from 'react';
import {View} from 'react-native';
import {Empty} from '../../components/Empty/Empty';
import CartForm from './CartForm/CartForm';
import CartList from './CartList/CartList';
import {styles} from './CartContent.styles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  deleteItem,
  getFilteredCart,
  getIsLoading,
} from '../../redux/cart/cartSlice';
import Loader from '../../UI/Loader/Loader';

interface CartContentProps {
  deleteAllProducts: () => void;
  openModal: () => void;
}

const CartContent = ({deleteAllProducts, openModal}: CartContentProps) => {
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
    <View style={styles.wrapper}>
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
};

export default CartContent;
