import React, { forwardRef } from 'react';

import {
	StyleSheet,
	Text,
	TextProps
} from "react-native";

export type AlloyText = Text;

export const AlloyText = forwardRef((props: TextProps & { children: React.ReactNode }, ref: React.Ref<Text>) => {
	const { style } = props;
	let fontWeight = "400";

	if(props.bold)
		fontWeight = "700";
	if(props.heavy)
		fontWeight = "900";

	return (
		<Text style={[styles.text,style,{fontWeight:fontWeight}]}>
			{props.children}
		</Text>
    );
})

const styles = StyleSheet.create({
	text: {
    	color: "#222226",
        fontSize: 16
	}
});