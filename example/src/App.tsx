import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { AlloyButton, AlloyText } from 'react-native-alloy';

export default function App() {
    return (
        <View style={styles.container}>
            <AlloyText heavy={false} bold={true}>Result is</AlloyText>
            <AlloyButton width="300">
                <AlloyText>hello</AlloyText>
            </AlloyButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
