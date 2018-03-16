Back to [react-native-jigsaw](../../README.md)

Input component
================
### API
Prop name        | Type      | Default | Description
---------------- | --------- | ------- | ------------------
leftContent      | component |         | Component to display before TextInput
onChangeText     | function  |         | Called when input's text changes
placeholder      | string    |         | Placeholder for empty input
rightContent     | component |         | Component to display after TextInput
value            | string    |         | Input value

### Code example

```jsx
import { Input } from 'react-native-jigsaw'

<Input
  value={this.state.inputText}
  onChangeText={this.setInputText}
  placeholder='Enter text...'
/>
```
