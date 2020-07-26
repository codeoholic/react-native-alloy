# react-native-alloy

Making React Native components better.

## Installation

```sh
npm install --save @codeoholic/react-native-alloy@0.1.1
```

## Usage

```js
import { AlloyText } from 'react-native-alloy';

// ...

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
