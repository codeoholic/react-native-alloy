import React, { forwardRef } from 'react';

import { Text, TextStyle } from 'react-native';

export type AlloyText = React.ComponentPropsWithRef<typeof Text> & {
  heavy?: boolean;
  bold?: boolean;
  fontSize?: number;
  italic?: boolean;
  fontColor?: string;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
};

export const AlloyText = forwardRef(
  (props: AlloyText & { children: React.ReactNode }, ref: React.Ref<Text>) => {
    const { style } = props;
    let fontWeight: TextStyle = { fontWeight: '400' };
    let fontSize: TextStyle = { fontSize: 16 };
    let fontStyle: TextStyle = { fontStyle: 'normal' };
    let fontColor: TextStyle = { color: '#000000' };
    let marginLeft: TextStyle = { marginLeft: 0 };
    let marginRight: TextStyle = { marginRight: 0 };
    let marginTop: TextStyle = { marginTop: 0 };
    let marginBottom: TextStyle = { marginBottom: 0 };
    if (props.bold) {
      fontWeight = { fontWeight: '700' };
    } else if (props.heavy) {
      fontWeight = { fontWeight: '900' };
    }
    if (props.italic) {
      fontStyle = { fontStyle: 'italic' };
    }
    if (props.fontSize) {
      fontSize = { fontSize: props.fontSize };
    }
    if (props.fontColor) {
      fontColor = { color: props.fontColor };
    }
    if (props.marginLeft) {
      marginLeft = { marginLeft: props.marginLeft };
    }
    if (props.marginRight) {
      marginRight = { marginRight: props.marginRight };
    }
    if (props.marginTop) {
      marginTop = { marginTop: props.marginTop };
    }
    if (props.marginBottom) {
      marginBottom = { marginBottom: props.marginBottom };
    }
    return (
      <Text
        {...(ref ? { ref } : {})}
        style={[
          fontWeight,
          fontStyle,
          fontSize,
          fontColor,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          style,
        ]}
      >
        {props.children}
      </Text>
    );
  }
);
