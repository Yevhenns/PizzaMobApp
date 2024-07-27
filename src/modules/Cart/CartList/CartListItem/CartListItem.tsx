import {Text, View, Image} from 'react-native';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import {styles} from './CartListItem.styles';
import {Remove} from '../../../../components/icons/Remove';
import {CartListItemQuantity} from './CartListItemQuantity/CartListItemQuantity';

interface CartListItemProps {
  data: CartItem;
  deleteCartItem: (cart_id: string) => void;
}

const CartListItem = ({data, deleteCartItem}: CartListItemProps) => {
  const {cart_id, photo, title, quantity, totalPrice, options} = data;

  return (
    <View style={styles.wrapper}>
      <View style={styles.mainContent}>
        <Image source={{uri: photo}} width={50} height={50} />
        <Text>{title}</Text>
        <CartListItemQuantity
          chosenQuantity={quantity}
          cart_id={cart_id}
          price={totalPrice}
        />
        <Text style={styles.totalPrice}>{totalPrice} грн</Text>
        <RoundButton
          style={styles.deleteButton}
          onPress={() => deleteCartItem(cart_id)}>
          <Remove />
        </RoundButton>
      </View>
      {options.length > 0 && (
        <View>
          <Text>Додаткові опції:</Text>
          <View>
            {options.map(item => {
              return (
                <View key={item}>
                  <Text>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
};

export default CartListItem;
