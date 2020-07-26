import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { AlloyText } from '@codeoholic/react-native-alloy';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding_20}>
        <AlloyText bold={true} heavy={false} fontSize={36}>
          Text
        </AlloyText>
        <AlloyText bold={true} heavy={false}>
          bold default size: 16
        </AlloyText>
        <AlloyText bold={false} heavy={true}>
          heavy default size: 16
        </AlloyText>
        <AlloyText italic={true}>
          italic default size: 16
        </AlloyText>
        <AlloyText italic={true} bold={true} fontSize={24}>
          italic size: 24 bold
        </AlloyText>
        <AlloyText>
          deatult size: 16
        </AlloyText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padding_20:{
    padding: 20
  }
});
