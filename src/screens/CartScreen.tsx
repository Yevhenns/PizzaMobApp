import { useState } from 'react';
import { View } from 'react-native';

import { CartContent } from '../components/CartContent/CartContent';
import { FinalModal } from '../components/FinalModal';
import { PagesWrapper } from '../components/PagesWrapper';
import { deleteAllItems } from '../redux/cart/cartSlice';
import { useAppDispatch } from '../redux/hooks';

export function CartScreen() {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const openModal = () => {
    setOpen(true);
  };

  const deleteAllProducts = () => {
    dispatch(deleteAllItems());
    setOpen(false);
  };

  return (
    <PagesWrapper>
      <View>
        <CartContent
          deleteAllProducts={deleteAllProducts}
          openModal={openModal}
        />
        {open && <FinalModal finalAction={deleteAllProducts} />}
      </View>
    </PagesWrapper>
  );
}
