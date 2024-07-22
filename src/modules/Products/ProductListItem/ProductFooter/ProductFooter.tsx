import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../../../UI/Button/Button';
import {ProductFooterCSS} from './ProductFooter.styles';
import {Basket} from '../../../../components/icons/Basket';

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
    <View style={ProductFooterCSS.productFooter}>
      {promotion ? (
        <View style={ProductFooterCSS.priceWrapper}>
          <Text style={ProductFooterCSS.oldPrice}>{totalPrice} грн</Text>
          <Text style={ProductFooterCSS.promPrice}>{totalPromPrice} грн</Text>
        </View>
      ) : (
        <Text style={ProductFooterCSS.price}>{totalPrice} грн</Text>
      )}
      <Button
        onPress={() =>
          addToCart(_id, totalQuantity, promotion, totalPrice, totalPromPrice, optionsTitles)}>
          <View>
            <Text style={ProductFooterCSS.buttonText}>В кошик</Text>
          </View>
      </Button>
    </View>
  );
};

export default ProductFooter;
