import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface CheckboxOptionProps extends TouchableOpacityProps {
  title: string;
  handleChange: (title: string, isChecked: boolean) => void;
}

export function CheckboxOption({
  title,
  handleChange,
  ...props
}: CheckboxOptionProps) {
  const [isChecked, setIsChecked] = useState(false);

  const showOptions = (title: string, isChecked: boolean) => {
    setIsChecked(!isChecked);
    handleChange(title, !isChecked);
  };

  return (
    <TouchableOpacity
      style={css.checkbox}
      onPress={() => showOptions(title, isChecked)}>
      <View style={css.checkboxButton}>
        {!isChecked ? <View /> : <View style={css.checkboxChecked} />}
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

CheckboxOption.displayName = 'Checkbox';

const css = StyleSheet.create({
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
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
