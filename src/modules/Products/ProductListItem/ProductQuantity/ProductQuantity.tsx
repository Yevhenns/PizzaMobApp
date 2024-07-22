import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import { productQuantityCSS } from './ProductQuantity.styles';
import { ChevronLeft } from '../../../../components/icons/ChevronLeft';
import { ChevronRight } from '../../../../components/icons/ChevronRight';

interface ProductQuantityProps {
  getTotalQuantity: (quantity: number) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
      <div className={css.quantity}>
              <RoundButton
                onClick={decrement}
                disabled={quantity === 1}
                aria-label="minus"
              >
                <Icon svg="left" iconWidth={24} iconHeight={24} color="accent" />
              </RoundButton>
              <span>{quantity} шт.</span>
              <RoundButton onClick={increment} aria-label="plus">
                <Icon svg="right" iconWidth={24} iconHeight={24} color="accent" />
              </RoundButton>
            </div>
            {category === 'pizzas' && options.length > 0 && (
              <div className={css.quantity}>
                <Checkbox
                  htmlFor="options"
                  name="options"
                  label="Опції"
                  posRight
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                />
              </div>
            )}
    </View>
  );
};

export default ProductQuantity;
