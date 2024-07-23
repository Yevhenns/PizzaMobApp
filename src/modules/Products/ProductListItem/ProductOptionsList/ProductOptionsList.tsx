import {ChangeEvent, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

type ProductOptionsListProps = {
  options: Option[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
    }
    if (vegan) {
      const filteredArray = options.filter(item => item.vegan === vegan);
      setFilteredByVegan(filteredArray);
    }
  }, [options, vegan]);

  return (
    <View>
      {filteredByVegan.map(item => {
        return (
          <View key={item.id}>
            {/* <Checkbox
              htmlFor="option"
              name="option"
              label={item.title}
              value={item.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            /> */}
            <Text>{item.price} грн</Text>
          </View>
        );
      })}
    </View>
  );
}
