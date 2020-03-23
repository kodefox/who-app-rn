import React from 'react';
import {
  Text,
  TextStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import theme, { colors } from '../constants/theme';

type Props = {
  /**
   * Action when button is pressed
   */
  onPress: () => void;
  /**
   * Content of button's label
   */
  children: string;
  /**
   * Enable full-width button. Defaults to `true`
   */
  fullWidth?: boolean;
  /**
   * Enable outlined button. Defaults to `false`
   */
  outlined?: boolean;
  /**
   * Style for button's container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style for button's label
   */
  labelStyle?: StyleProp<TextStyle>;
};

export default function Button({
  onPress,
  children,
  fullWidth,
  outlined,
  containerStyle,
  labelStyle,
}: Props) {
  // TODO: Use `Text` from core-ui
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        outlined ? styles.outlined : styles.primary,
        fullWidth && styles.fullWidth,
        containerStyle,
      ]}
    >
      <Text
        style={[
          labelStyle,
          outlined ? styles.outlinedLabel : styles.primaryLabel,
          styles.label,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  fullWidth: true,
};

let styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  label: {
    // TODO: Change to constant
    fontSize: 24,
    fontWeight: '500',
  },
  primaryLabel: {
    color: theme.colors.white,
  },
  outlinedLabel: {
    color: theme.colors.primary,
  },
  fullWidth: {
    width: '100%',
  },
  outlined: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
});
