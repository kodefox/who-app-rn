import React, { ComponentProps, ReactNode } from 'react';
import { Text as TextBase, StyleSheet, TextStyle } from 'react-native';

type Props = ComponentProps<typeof TextBase> & {
  size?: number;
  weight?: TextStyle['fontWeight'];
  fontStyle?: TextStyle['fontStyle'];
  children?: ReactNode;
};

function Text(props: Props) {
  let {
    style,
    size = 20,
    weight = 'normal',
    fontStyle = 'normal',
    ...otherProps
  } = props;
  return (
    <TextBase
      style={[
        styles.default,
        {
          fontSize: size,
          fontWeight: weight,
          fontStyle,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

let styles = StyleSheet.create({
  default: {
    lineHeight: 23,
  },
});

export default Text;
