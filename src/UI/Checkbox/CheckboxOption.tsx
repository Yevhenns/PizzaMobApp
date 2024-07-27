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
  label: string;
  handleChange: (value: string, isChecked: boolean) => void;
  value: string;
}

const CheckboxOption: FC<PropsWithRef<Props>> = ({
  label,
  handleChange,
  value,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const showOptions = (value: string, isChecked: boolean) => {
    handleChange(value, isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      style={CheckboxCSS.checkbox}
      onPress={() => showOptions(value, isChecked)}>
      <View>
        {isChecked ? (
          <HeartFilled color={'black'} />
        ) : (
          <Heart color={'black'} />
        )}
      </View>
      <Text>{label}</Text>
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
