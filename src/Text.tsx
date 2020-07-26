import React, { forwardRef } from 'react';

import { StyleSheet, Text, TextStyle } from 'react-native';

export type AlloyText = React.ComponentPropsWithRef<typeof Text> & {
  heavy?: boolean;
  bold?: boolean;
  // fontWeight?: TextStyle;
};

export const AlloyText = forwardRef(
  (
    props: AlloyText & { children: React.ReactNode },
    ref: React.Ref<AlloyText>
  ) => {
    const { style } = props;
    let fontWeights: TextStyle = { fontWeight: '400' };
    if (props.bold) {
      fontWeights = { fontWeight: '700' };
    } else if (props.heavy) {
      fontWeights = { fontWeight: '900' };
    } else {
      fontWeights = { fontWeight: '400' };
    }
    return (
      <AlloyText
        {...(ref ? { ref } : {})}
        style={[styles.text, style, fontWeights]}
      >
        {props.children}
      </AlloyText>
    );
  }
);

const styles = StyleSheet.create({
  text: {
    color: '#222226',
    fontSize: 16,
  },
});
