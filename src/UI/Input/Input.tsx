import {
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
  TextInputProps,
} from 'react-native';
import {StyleSheet} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  numberOfLines?: number;
  textArea?: boolean;
  touched?: any;
}

export function Input({
  textArea = false,
  label,
  error,
  keyboardType = 'default',
  numberOfLines = 1,
  ...props
}: InputProps) {
  return (
    <View style={styles.fieldset}>
      <Text>{label}</Text>
      <TextInput
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        style={[styles.input, textArea && styles.textArea]}
        {...props}
      />

      <View style={styles.errorContainer}>
        {error && <Text style={styles.errorMessage}>{error}</Text>}
      </View>
    </View>
  );
}

Input.displayName = 'Input';

const styles = StyleSheet.create({
  fieldset: {
    // font-family: var(--secondary-font);
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    borderColor: '#de612b',
    borderWidth: 1,
    // transition: var(--transition);
    // outline: none;
    // font-family: var(--main-font);
    // &:hover {
    //     box-shadow: var(--box-shadow);
    // }
  },
  textArea: {
    textAlignVertical: 'top',
  },
  errorContainer: {
    height: 20,
  },
  errorMessage: {
    color: 'red',
  },
});
