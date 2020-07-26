# react-native-alloy

Making React Native components better.

## Installation

```sh
npm install --save @codeoholic/react-native-alloy@0.1.3
```

## Usage

```js
import { AlloyText } from '@codeoholic/react-native-alloy';

// ...

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
<AlloyText fontColor="#F35F4D" bold={true} fontSize={24}>font color #F35F4D size: 24</AlloyText>
<AlloyText marginLeft={10}>marginLeft: 10</AlloyText>
<AlloyText marginTop={10}>marginTop: 10</AlloyText>
<AlloyText marginBottom={10}>marginBottom: 10</AlloyText>
<AlloyText marginRight={10}>marginRight: 10</AlloyText>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
