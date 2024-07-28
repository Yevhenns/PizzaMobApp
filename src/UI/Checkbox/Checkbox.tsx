import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface CheckboxProps extends TouchableOpacityProps {
  label: string;
  handleChange: () => void;
  labelLeft?: boolean;
}

export function Checkbox({
  label,
  handleChange,
  labelLeft = false,
  ...props
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const showOptions = () => {
    handleChange();
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      style={[css.checkbox, labelLeft ? css.left : css.right]}
      onPress={showOptions}>
      <View style={css.checkboxButton}>
        {!isChecked ? <View /> : <View style={css.checkboxChecked} />}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

Checkbox.displayName = 'Checkbox';

const css = StyleSheet.create({
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  left: {
    flexDirection: 'row-reverse',
  },
  right: {
    flexDirection: 'row',
  },
  checkboxButton: {
    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: '#de612b',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    width: 18,
    height: 18,
    backgroundColor: '#de612b',
    borderRadius: 4,
  },
});
