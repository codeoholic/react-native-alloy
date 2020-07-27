import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { AlloyText, AlloyView } from '@codeoholic/react-native-alloy';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding_20}>
        <AlloyText bold={true} heavy={false} fontSize={36}>
          Text
        </AlloyText>
        <AlloyText bold={true} heavy={false} marginTop={10}>
          bold default size: 16
        </AlloyText>
        <AlloyText bold={false} heavy={true}>
          heavy default size: 16
        </AlloyText>
        <AlloyText italic={true}>italic default size: 16</AlloyText>
        <AlloyText italic={true} bold={true} fontSize={24}>
          italic size: 24 bold
        </AlloyText>
        <AlloyText>default size: 16</AlloyText>
        <AlloyText fontColor="#F35F4D" bold={true} fontSize={24}>
          font color #F35F4D size: 24
        </AlloyText>
        <AlloyText marginLeft={10}>marginLeft: 10</AlloyText>
        <AlloyText marginTop={10}>marginTop: 10</AlloyText>
        <AlloyText marginBottom={10}>marginBottom: 10</AlloyText>
        <AlloyText marginRight={10}>marginRight: 10</AlloyText>
        <AlloyText bold={true} heavy={false} fontSize={36} marginTop={20}>
          View
        </AlloyText>
        <AlloyView marginLeft={20} backgroundColor={"#F35F4D"} padding={20} height={200} borderWidth={1} borderBottomLeftRadius={50} borderColor={'#dedede'} paddingTop={0} borderRadius={10}>
          <AlloyText fontSize={36} fontColor={"#fff"}>hello</AlloyText>
        </AlloyView>
        <AlloyView marginLeft={20} backgroundColor={"#F35F4D"} padding={20} height={200} borderWidth={1} borderColor={'#dedede'} paddingTop={0} borderRadius={20}>
          <AlloyText fontSize={36} fontColor={"#fff"}>hello</AlloyText>
        </AlloyView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padding_20: {
    padding: 20,
  },
});
