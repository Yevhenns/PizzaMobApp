import {Text, View, Image} from 'react-native';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import {Remove} from '../../../../components/icons/Remove';
import {CartListItemQuantity} from './CartListItemQuantity/CartListItemQuantity';
import {StyleSheet} from 'react-native';

interface CartListItemProps {
  data: CartItem;
  deleteCartItem: (cart_id: string) => void;
}

export function CartListItem({data, deleteCartItem}: CartListItemProps) {
  const {cart_id, photo, title, quantity, totalPrice, options} = data;

  return (
    <View style={css.wrapper}>
      <View style={css.mainContent}>
        <Image source={{uri: photo}} width={50} height={50} />
        <Text>{title}</Text>
        <CartListItemQuantity
          chosenQuantity={quantity}
          cart_id={cart_id}
          price={totalPrice}
        />
        <Text style={css.totalPrice}>{totalPrice} грн</Text>
        <RoundButton
          style={css.deleteButton}
          onPress={() => deleteCartItem(cart_id)}>
          <Remove />
        </RoundButton>
      </View>
      {options.length > 0 && (
        <View>
          <View>
            {options.map(item => {
              return (
                <View key={item}>
                  <Text>+ {item}</Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
}

const css = StyleSheet.create({
  wrapper: {
    borderColor: '#de612b',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },
  mainContent: {
    width: '100%',
    flexDirection: 'row',
    gap: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  totalPrice: {
    flexBasis: 65,
  },
  deleteButton: {
    flexBasis: 32,
  },
});
