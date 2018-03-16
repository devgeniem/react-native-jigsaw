Back to [react-native-jigsaw](../../README.md)

ModalContainer component
================
### API
Prop name         | Type      | Default | Description
----------------- | --------- | ------- | ------------------
visible           | bool      | false   | Is container visible or not
overlayColor      | string    |         | Overlay background color
onRequestClose    | function  |         | Called on hardware back button press on Android
style             | object    |         | Modal container styles

### Code example

```jsx
import { ModalContainer, Button } from 'react-native-jigsaw'

<ModalContainer
  visible={this.state.modalVisible}
  onRequestClose={this.toggleModal}
>
  <Text>Hello world</Text>
  <Button onPress={this.toggleModal} text='Close' />
</ModalContainer>
```
