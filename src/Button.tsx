import React, { forwardRef } from 'react';

import {
	StyleSheet,
	TouchableOpacity,
	ViewProps
} from "react-native";

export type AlloyButton = TouchableOpacity;

export const AlloyButton = forwardRef((props: TextProps & { children: React.ReactNode }, ref: React.Ref<Text>) => {
	const { style } = props;
	let fontWeight = "400";

	if(props.bold)
		fontWeight = "700";
	if(props.heavy)
		fontWeight = "900";

	return (
		<TouchableOpacity style={[styles.text,style,{fontWeight:fontWeight}]}>
			{props.children}
		</TouchableOpacity>
    );
})

const styles = StyleSheet.create({
	text: {
    	color: "#222226",
        fontSize: 16
	}
});