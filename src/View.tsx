import React, { forwardRef } from 'react';

import { View, ViewStyle } from 'react-native';

export type AlloyView = React.ComponentPropsWithRef<typeof View> & {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  backgroundColor?: string;
  padding?: number;
  width?: number;
  height?: number;
  borderWidth?: number;
  borderColor?: string;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderRadius?: number;
};

export const AlloyView = forwardRef(
  (props: AlloyView & { children: React.ReactNode }, ref: React.Ref<View>) => {
    const { style } = props;
    let marginLeft: ViewStyle = { marginLeft: 0 };
    let marginRight: ViewStyle = { marginRight: 0 };
    let marginTop: ViewStyle = { marginTop: 0 };
    let marginBottom: ViewStyle = { marginBottom: 0 };
    let backgroundColor: ViewStyle = { backgroundColor: "#fff" };
    let padding: ViewStyle = { padding: 0 };
    let width: ViewStyle = { width: 'auto' };
    let height: ViewStyle = { height: 'auto' };
    let borderWidth: ViewStyle = { borderWidth: 0 };
    let borderColor: ViewStyle = { borderColor: '#000' };
    let paddingLeft: ViewStyle = { marginLeft: 0 };
    let paddingRight: ViewStyle = { marginRight: 0 };
    let paddingTop: ViewStyle = { marginTop: 0 };
    let paddingBottom: ViewStyle = { marginBottom: 0 };
    let borderTopRightRadius: ViewStyle = { borderTopRightRadius: 0 };
    let borderTopLeftRadius: ViewStyle = { borderTopLeftRadius: 0 };
    let borderBottomRightRadius: ViewStyle = { borderBottomRightRadius: 0 };
    let borderBottomLeftRadius: ViewStyle = { borderBottomLeftRadius: 0 };
    let borderRadius: ViewStyle = { borderRadius: 0 };
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
    if (props.backgroundColor) {
      backgroundColor = { backgroundColor: props.backgroundColor };
    }
    if (props.padding) {
      padding = { padding: props.padding };
    }
    if (props.width) {
      width = { width: props.width };
    }
    if (props.height) {
      height = { height: props.height };
    }
    if (props.borderWidth) {
      borderWidth = { borderWidth: props.borderWidth };
    }
    if (props.borderColor) {
      borderColor = { borderColor: props.borderColor };
    }
    if (props.paddingLeft) {
      paddingLeft = { paddingLeft: props.paddingLeft };
    }
    if (props.paddingRight) {
      paddingRight = { paddingRight: props.paddingRight };
    }
    if (props.paddingTop) {
      paddingTop = { paddingTop: props.paddingTop };
    }
    if (props.paddingBottom) {
      paddingBottom = { paddingBottom: props.paddingBottom };
    }
    if (props.borderTopRightRadius) {
      borderTopRightRadius = { borderTopRightRadius: props.borderTopRightRadius };
    }
    if (props.borderTopLeftRadius) {
      borderTopLeftRadius = { borderTopLeftRadius: props.borderTopLeftRadius };
    }
    if (props.borderBottomRightRadius) {
      borderBottomRightRadius = { borderBottomRightRadius: props.borderBottomRightRadius };
    }
    if (props.borderBottomLeftRadius) {
      borderBottomLeftRadius = { borderBottomLeftRadius: props.borderBottomLeftRadius };
    }
    if (props.borderRadius) {
      borderRadius = { borderRadius: props.borderRadius };
    }
    return (
      <View
        {...(ref ? { ref } : {})}
        style={[
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          backgroundColor,
          padding,
          width,
          height,
          borderWidth,
          borderColor,
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingBottom,
          borderTopRightRadius,
          borderTopLeftRadius,
          borderBottomRightRadius,
          borderBottomLeftRadius,
          borderRadius,
          style,
        ]}
      >
        {props.children}
      </View>
    );
  }
);
