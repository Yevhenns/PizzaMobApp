import {Button} from '../../UI/Button/Button';
// import LoaderModal from "../../UI/common/LoaderModal/LoaderModal";
import {Error500} from '../Error500/Error500';
import {Text, View} from 'react-native';
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
    <View style={styles.modalWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.modal}>
          <View style={styles.resultText}>
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
            <Text style={styles.buttonText}>Вийти</Text>
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    //   background: rgba($color: #3d3838, $alpha: 0.7),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    overflow: 'scroll',
  },
  modal: {
    // backgroundColor: var(--white-color),
    // color: var(--black-color),
    // font-family: var(--secondary-font),
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
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
