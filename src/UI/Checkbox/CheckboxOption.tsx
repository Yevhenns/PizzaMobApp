import React, {FC, useState, PropsWithRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {HeartFilled} from '../../components/icons/HeartFilled';
import {Heart} from '../../components/icons/Heart';

interface Props extends TouchableOpacityProps {
  title: string;
  handleChange: (title: string, isChecked: boolean) => void;
}

const CheckboxOption: FC<PropsWithRef<Props>> = ({
  title,
  handleChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const showOptions = (title: string, isChecked: boolean) => {
    setIsChecked(!isChecked);
    handleChange(title, !isChecked);
  };

  return (
    <TouchableOpacity
      style={CheckboxCSS.checkbox}
      onPress={() => showOptions(title, isChecked)}>
      <View>
        {isChecked ? (
          <HeartFilled color={'black'} />
        ) : (
          <Heart color={'black'} />
        )}
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

CheckboxOption.displayName = 'Checkbox';

export default CheckboxOption;

const CheckboxCSS = StyleSheet.create({
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    flexDirection: 'row',
  },
});
