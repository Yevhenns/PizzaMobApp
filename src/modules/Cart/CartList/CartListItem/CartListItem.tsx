import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import {styles} from './CartListItem.styles';
import {Remove} from '../../../../components/icons/Remove';
interface Props {
  data: TCartItem;
  deleteCartItem: (_id: string) => void;
}

const CartListItem: FC<Props> = ({data, deleteCartItem}) => {
  const {_id, photo, title, quantity, totalPrice} = data;

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{uri: photo}}
        width={50}
        height={50}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
      <Text style={styles.totalPrice}>{totalPrice} грн</Text>
      <RoundButton
        style={styles.deleteButton}
        onPress={() => deleteCartItem(_id)}>
        <Remove />
      </RoundButton>
    </View>
  );
};

export default CartListItem;
