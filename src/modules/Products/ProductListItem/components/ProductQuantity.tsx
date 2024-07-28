import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import {ChevronLeft} from '../../../../components/icons/ChevronLeft';
import {ChevronRight} from '../../../../components/icons/ChevronRight';
import {Checkbox} from '../../../../UI/Checkbox/Checkbox';
import {StyleSheet} from 'react-native';

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
    <View style={styles.wrapper}>
      <View style={styles.quantitySet}>
        <RoundButton
          onPress={decrement}
          disabled={quantity === 1}
          aria-label="minus">
          <ChevronLeft color={'#de612b'} />
        </RoundButton>
        <Text style={styles.quantityText}>{quantity} шт.</Text>
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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
  },
  quantitySet: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
});
