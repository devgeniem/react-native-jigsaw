Back to [react-native-jigsaw](../../README.md)

CheckBox component
================
### API
Prop name        | Type      | Default   | Description
---------------- | --------- | --------- | ------------------
checked          | boolean   | false     | Is checkbox checked or not
color            | string    | '#780076' | Set checkbox color
invert           | boolean   | false     | Use inverted checkbox style
onPress          | function  |           | Function that gets called on checkbox press
renderCheck      | function  |           | Replaces the default check
size             | number    | 32        | CheckBox size
style            | object    |           | CheckBox styles

### Code example

```jsx
import { CheckBox } from 'react-native-jigsaw'

<CheckBox
  onPress={this.toggleCheck}
  checked={this.state.checked}
  color='#000'
/>
```
