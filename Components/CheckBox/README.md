Back to [react-native-jigsaw](../../README.md)

CheckBox component
================
### API
Prop name        | Type      | Default | Description
---------------- | --------- | ------- | ------------------
checked          | bool      |         | Is checbox checked or not
checkColor       | string    |         | Color for the default check icon
checkComponent   | component |         | Check component replaces the default check icon
onChange         | function  |         | Function that gets called on checkbox press
style            | object    |         | Checkbox styles

### Code example

```jsx
import { CheckBox } from 'react-native-jigsaw'

<CheckBox
  onChange={this.toggleCheck}
  checked={this.state.checked}
  color='#000'
/>
```
