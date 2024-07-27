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
  handleChange: () => void;
  labelLeft?: boolean;
}

const Checkbox: FC<PropsWithRef<Props>> = ({
  label,
  handleChange,
  labelLeft = false,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const showOptions = () => {
    handleChange();
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      style={[
        CheckboxCSS.checkbox,
        labelLeft ? CheckboxCSS.left : CheckboxCSS.right,
      ]}
      onPress={showOptions}>
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;

const CheckboxCSS = StyleSheet.create({
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
});
