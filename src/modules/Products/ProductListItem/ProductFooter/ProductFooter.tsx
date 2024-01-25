import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../../../UI/Button/Button';
import {ProductFooterCSS} from './ProductFooter.styles';
import {Basket} from '../../../../components/icons/Basket';

type ProductFooterProps = {
  addToCart: TAddToCart;
  isInCart: (_id: string) => boolean;
} & TProductItem;

const ProductFooter = ({
  _id,
  totalQuantity,
  promotion,
  totalPrice,
  totalPromPrice,
  addToCart,
  isInCart,
}: ProductFooterProps) => {
  const isInCartBoolean = isInCart(_id);

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
        disabled={isInCartBoolean}
        onPress={() =>
          addToCart(_id, totalQuantity, promotion, totalPrice, totalPromPrice)
        }>
        {isInCartBoolean ? (
          <View style={ProductFooterCSS.inBasketContainer}>
            <Basket />
            <Text style={ProductFooterCSS.buttonText}>В кошику</Text>
          </View>
        ) : (
          <View>
            <Text style={ProductFooterCSS.buttonText}>В кошик</Text>
          </View>
        )}
      </Button>
    </View>
  );
};

export default ProductFooter;
