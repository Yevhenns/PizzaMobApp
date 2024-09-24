import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyleSheet } from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function IconButton({ children, ...props }: ButtonProps) {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
}
