import {Button} from '../../UI/Button/Button';
import {Error500} from '../Error500/Error500';
import {Modal, Text, View} from 'react-native';
import Loader from '../../UI/Loader/Loader';
import {useAppSelector} from '../../redux/hooks';
import {
  getError,
  getFilteredCart,
  getIsLoading,
  getOrderSum,
} from '../../redux/cart/cartSlice';
import {StyleSheet} from 'react-native';

interface FinalModalProps {
  finalAction: () => void;
}

export function FinalModal({finalAction}: FinalModalProps) {
  const filteredCart = useAppSelector(getFilteredCart);
  const sum = useAppSelector(getOrderSum);
  const isLoading = useAppSelector(getIsLoading);
  const err = useAppSelector(getError);

  if (err) {
    return <Error500 />;
  }

  return (
    <Modal style={styles.modalWrapper}>
      {isLoading ? (
        <View style={styles.loaderWrapper}>
          <Loader />
        </View>
      ) : (
        <View style={styles.modal}>
          <View style={styles.resultText}>
            <Text>Дякуємо!</Text>
            <Text>Ваше замовлення прийняте,</Text>
            <Text>очікуйте дзвінок від менеджера</Text>
            <Text>Інформація про замовлення:</Text>
          </View>
          <View>
            {filteredCart.map(({cart_id, title, quantity, totalPrice}) => {
              return (
                <View key={cart_id}>
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
            <Text style={styles.buttonText}>Вийти</Text>
          </Button>
        </View>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
  },
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  resultText: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
