Back to [react-native-jigsaw](../../README.md)

CheckBox component
================
### API
Prop name        | Type      | Default | Description
---------------- | --------- | ------- | ------------------
checked          | bool      | false   | Is checkbox checked or not
color            | string    |         | Set checkbox color
invert           | bool      | false   | Use inverted checkbox style
onPress          | function  |         | Function that gets called on checkbox press
renderCheck      | function  |         | Replaces the default check
style            | object    |         | Checkbox styles

### Code example

```jsx
import { CheckBox } from 'react-native-jigsaw'

<CheckBox
  onPress={this.toggleCheck}
  checked={this.state.checked}
  color='#000'
/>
```
