Back to [react-native-jigsaw](../../README.md)

Picker component
================
### API
Prop name         | Type      | Default | Description
----------------- | --------- | ------- | ------------------
closePicker       | function  |         | Function to close picker
overlayColor      | string    |         | Modal overlay background color
style             | object    |         | Modal container styles
onValueChange     | function  |         | Function to handle value changes
visible           | bool      | false   | Is picker visible or not

### Code example

```jsx
import { Picker } from 'react-native-jigsaw'

const items = [{ label: 'First item', value: 1 }]

<Picker
  items={items}
  visible={this.state.pickerVisible}
  value={this.state.pickerValue}
  closePicker={this.closePicker}
  onValueChange={this.setPickerValue}
/>
```
