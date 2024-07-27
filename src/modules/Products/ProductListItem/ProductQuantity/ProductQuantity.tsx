import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import {productQuantityCSS} from './ProductQuantity.styles';
import {ChevronLeft} from '../../../../components/icons/ChevronLeft';
import {ChevronRight} from '../../../../components/icons/ChevronRight';
import Checkbox from '../../../../UI/Checkbox/Checkbox';

interface ProductQuantityProps {
  getTotalQuantity: (quantity: number) => void;
  handleChange: () => void;
  options?: Option[] | [];
  category: string;
}

export function ProductQuantity({
  getTotalQuantity,
  handleChange,
  options = [],
  category,
}: ProductQuantityProps) {
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
      <View style={productQuantityCSS.quantitySet}>
        <RoundButton
          onPress={decrement}
          disabled={quantity === 1}
          aria-label="minus">
          <ChevronLeft color={'#de612b'} />
        </RoundButton>
        <Text>{quantity} шт.</Text>
        <RoundButton onPress={increment} aria-label="plus">
          <ChevronRight color={'#de612b'} />
        </RoundButton>
      </View>
      {category === 'pizzas' && options.length > 0 && (
        <Checkbox label="Опції" handleChange={handleChange} labelLeft />
      )}
    </View>
  );
}

export default ProductQuantity;
