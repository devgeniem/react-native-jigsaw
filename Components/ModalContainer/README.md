Back to [react-native-jigsaw](../../README.md)

ModalContainer component
================
### API
Prop name         | Type      | Default | Description
----------------- | --------- | ------- | ------------------
visible           | boolean   | false   | Is container visible or not
overlayColor      | string    |         | Overlay background color
onRequestClose    | function  |         | Called on hardware back button press on Android
style             | object    |         | Modal container styles
width             | number    | '90%'   | Modal width
height            | number    |         | Modal height
borderRadius      | number    | 0       | Modal border radius
borderWidth       | number    | 0       | Modal border width
borderColor       | string    |         | Modal border color
backgroundColor   | string    | 'white' | Modal background color
padding           | number    | 0       | Modal padding
paddingHorizontal | number    | 0       | Modal horizontal padding
paddingVertical   | number    | 0       | Modal vertical padding
paddingTop        | number    | 0       | Modal top padding
paddingLeft       | number    | 0       | Modal left padding
paddingRight      | number    | 0       | Modal right padding
paddingBottom     | number    | 0       | Modal bottom padding

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
