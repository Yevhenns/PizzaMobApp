import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {StyleSheet} from 'react-native';

type ButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
} & TouchableOpacityProps;

export function Button({
  disabled = false,
  children,
  onPress,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.button}
      onPress={onPress}
      {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#de612b',
    fontSize: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Comfortaa-Bold',
  },
});
