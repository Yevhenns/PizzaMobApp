import {useState} from 'react';
import {View} from 'react-native';
import {useAppDispatch} from '../redux/hooks';
import {deleteAllItems} from '../redux/cart/cartSlice';
import {PagesWrapper} from '../components/PagesWrapper/PagesWrapper';
import {CartContent} from '../modules/CartContent/CartContent';
import {FinalModal} from '../components/FinalModal/FinalModal';

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
