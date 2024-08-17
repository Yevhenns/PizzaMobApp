import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from '../../../Button/Button';

interface ProductFooterProps extends ProductItem {
  addToCart: AddToCart;
  optionsArray: Option[];
}

export function ProductFooter({
  _id,
  totalQuantity,
  promotion,
  totalPrice,
  totalPromPrice,
  addToCart,
  optionsArray,
}: ProductFooterProps) {
  const optionsTitles = optionsArray.map(item => item.title);

  return (
    <View style={styles.productFooter}>
      {promotion ? (
        <View style={styles.priceWrapper}>
          <Text style={styles.oldPrice}>{totalPrice} грн</Text>
          <Text style={styles.promPrice}>{totalPromPrice} грн</Text>
        </View>
      ) : (
        <Text style={styles.promPrice}>{totalPrice} грн</Text>
      )}
      <Button
        onPress={() =>
          addToCart(
            _id,
            totalQuantity,
            promotion,
            totalPrice,
            totalPromPrice,
            optionsTitles,
          )
        }>
        В кошик
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  productFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  priceWrapper: {
    flexDirection: 'column',
  },
  promPrice: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 18,
    color: '#de612b',
  },
  oldPrice: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'line-through',
  },
  inBasketContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
