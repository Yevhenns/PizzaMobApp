import React, {FC} from 'react';
import Button from '../../UI/Button/Button';
// import LoaderModal from "../../UI/common/LoaderModal/LoaderModal";
import Error500 from '../errors/Error500/Error500';
import {Text, View} from 'react-native';
import Loader from '../../UI/Loader/Loader';
import {FinalModalCSS} from './FinalModal.styles';
import {useAppSelector} from '../../redux/hooks';
import {
  getError,
  getFilteredCart,
  getIsLoading,
  getOrderSum,
} from '../../redux/cart/cartSlice';

interface FinalModalProps {
  finalAction: () => void;
}

const FinalModal: FC<FinalModalProps> = ({finalAction}) => {
  const filteredCart = useAppSelector(getFilteredCart);
  const sum = useAppSelector(getOrderSum);
  const isLoading = useAppSelector(getIsLoading);
  const err = useAppSelector(getError);

  if (err) {
    return <Error500 />;
  }

  return (
    <View style={FinalModalCSS.modalWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={FinalModalCSS.modal}>
          <View style={FinalModalCSS.resultText}>
            <Text>Дякуємо!</Text>
            <Text>Ваше замовлення прийняте,</Text>
            <Text>очікуйте дзвінок від менеджера</Text>
            <Text>Інформація про замовлення:</Text>
          </View>
          <View>
            {filteredCart.map(({_id, title, quantity, totalPrice}) => {
              return (
                <View key={_id}>
                  <Text>
                    {title} - {quantity} шт. - {totalPrice} грн.
                  </Text>
                </View>
              );
            })}
          </View>
          <View>
            <Text>Загальна сума: {sum} грн.</Text>
          </View>
          <Button onPress={finalAction}>
            <Text style={FinalModalCSS.buttonText}>Вийти</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default FinalModal;
