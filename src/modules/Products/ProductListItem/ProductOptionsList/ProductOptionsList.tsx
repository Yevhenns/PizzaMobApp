import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckboxOption} from '../../../../UI/Checkbox/CheckboxOption';

type ProductOptionsListProps = {
  options: Option[];
  handleChange: (title: string, isChecked: boolean) => void;
  vegan: boolean;
};

export function ProductOptionsList({
  options,
  handleChange,
  vegan,
}: ProductOptionsListProps) {
  const [filteredByVegan, setFilteredByVegan] = useState<Option[]>([]);

  useEffect(() => {
    if (!vegan) {
      setFilteredByVegan(options);
    } else {
      const filteredArray = options.filter(item => item.vegan === vegan);
      setFilteredByVegan(filteredArray);
    }
  }, [options, vegan]);

  return (
    <View style={css.wrapper}>
      {filteredByVegan.map(item => {
        return (
          <View key={item.id} style={css.productItem}>
            <CheckboxOption title={item.title} handleChange={handleChange} />
            <Text>+ {item.price} грн</Text>
          </View>
        );
      })}
    </View>
  );
}

const css = StyleSheet.create({
  wrapper: {
    display: 'flex',
    gap: 6,
  },
  productItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
