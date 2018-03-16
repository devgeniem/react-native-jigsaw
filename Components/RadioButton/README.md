Back to [react-native-jigsaw](../../README.md)

RadioButton component
================
### API
Prop name        | Type      | Default | Description
---------------- | --------- | ------- | ------------------
checked          | boolean   | false   | Is radio button checked or not
color            | string    |         | Set radio button color
invert           | boolean   | false   | Use inverted radio button style
onPress          | function  |         | Function that gets called on radio button press
renderCheck      | function  |         | Replaces the default check
style            | object    |         | Radio button styles

### Code example

```jsx
import { RadioButton } from 'react-native-jigsaw'

<RadioButton
  onPress={this.toggleCheck}
  checked={this.state.checked}
  color='#000'
/>
```
