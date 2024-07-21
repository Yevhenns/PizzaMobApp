import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import { productQuantityCSS } from './ProductQuantity.styles';
import { ChevronLeft } from '../../../../components/icons/ChevronLeft';
import { ChevronRight } from '../../../../components/icons/ChevronRight';

type ProductQuantityProps = {
  getTotalQuantity: (quantity: number) => void;
};

const ProductQuantity = ({ getTotalQuantity }: ProductQuantityProps) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    getTotalQuantity(quantity);
  }, [getTotalQuantity, quantity]);

  return (
    <View style={productQuantityCSS.wrapper}>
      <RoundButton
        onPress={decrement}
        disabled={quantity === 1}
        aria-label="minus">
        <ChevronLeft />
      </RoundButton>
      <Text style={productQuantityCSS.quantityText}>{quantity} шт.</Text>
      <RoundButton onPress={increment} aria-label="plus">
        <ChevronRight />
      </RoundButton>
    </View>
  );
};

export default ProductQuantity;
