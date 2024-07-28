import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../../../UI/Button/Button';
import {StyleSheet} from 'react-native';

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
        <Text style={styles.price}>{totalPrice} грн</Text>
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
        <View>
          <Text style={styles.buttonText}>В кошик</Text>
        </View>
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
  price: {
    // font-family: var(--main-font);
    fontSize: 18,
    // color: var(--black-color);
    fontWeight: '700',
  },
  priceWrapper: {
    flexDirection: 'column',
  },
  promPrice: {
    // font-family: var(--main-font);
    fontSize: 18,
    color: '#de612b',
    // color: var(--accent-color);
    fontWeight: '700',
  },
  oldPrice: {
    // font-family: var(--main-font);
    fontSize: 16,
    // color: var(--black-color);
    fontWeight: '700',
    textDecorationLine: 'line-through',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  inBasketContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
