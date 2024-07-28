import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {StyleSheet} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
} & TouchableOpacityProps;

const RoundButton = ({children, onPress, disabled, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      {...props}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    // border: 'none',
    // color: var(--accent-color);
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
