import React, { forwardRef } from 'react';

import { StyleSheet, Text, TextStyle } from 'react-native';

export type AlloyText = React.ComponentPropsWithRef<typeof Text> & {
  heavy?: boolean;
  bold?: boolean;
  fontSize?: number;
  italic?: boolean;
};

export const AlloyText = forwardRef(
  (
    props: AlloyText & { children: React.ReactNode },
    ref: React.Ref<Text>
  ) => {
    const { style } = props;
    let fontWeight: TextStyle = { fontWeight: '400' };
    let fontSize: TextStyle = { fontSize: 16 };
    let fontStyle: TextStyle = { fontStyle: 'normal' };
    if (props.bold) {
      fontWeight = { fontWeight: '700' };
    } else if (props.heavy) {
      fontWeight = { fontWeight: '900' };
    } else {
      fontWeight = { fontWeight: '400' };
    }
    if (props.italic) {
      fontStyle = { fontStyle: 'italic' }
    }
    if(props.fontSize) {
      fontSize = { fontSize: props.fontSize }
    }
    return (
      <Text
        {...(ref ? { ref } : {})}
        style={[styles.text, style, fontWeight, fontStyle, fontSize]}
      >
        {props.children}
      </Text>
    );
  }
);

const styles = StyleSheet.create({
  text: {
    color: '#222226',
  },
});
