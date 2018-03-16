Back to [react-native-jigsaw](../../README.md)

Input component
================
### API
Prop name         | Type      | Default   | Description
----------------- | --------- | --------- | ------------------------------------------------------
inputStyle        | object    |           | Input custom styles (overrides default styles)
leftContent       | Component |           | Component shown on left
rightContent      | Component |           | Component shown on right
width             | number    |           | Input width
height            | number    |           | Input height
borderRadius      | number    |           | Input border radius
borderWidth       | number    |           | Input border width 
borderColor       | string    |           | Input border color
fontSize          | number    |           | Input font size
color             | string    |           | Input text color
margin            | number    |           | Input margin
marginVertical    | number    |           | Input vertical margin
marginHorizontal  | number    |           | Input horizontal margin
padding           | number    |           | Input padding
paddingVertical   | number    |           | Input vertical padding
paddingHorizontal | number    |           | Input horizontal padding
paddingTop        | number    |           | Input top padding
paddingBottom     | number    |           | Input bottom padding
paddingLeft       | number    |           | Input left padding
paddingRight      | number    |           | Input right padding
textAlignVertical | string    |           | Input vertical text align
...               |           |           | You can use any props available to [TextInput](https://facebook.github.io/react-native/docs/textinput.html)

### Code example

```jsx
import { Input } from 'react-native-jigsaw'

<Input
  value={this.state.inputValue}
  onChangeText={this.onChangeText}
  placeholder='Basic input'
/>
```
