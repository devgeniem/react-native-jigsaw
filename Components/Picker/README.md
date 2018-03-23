Back to [react-native-jigsaw](../../README.md)

Picker component
================
### API
Prop name         | Type      | Default           | Description
----------------- | --------- | ----------------- | ------------------
closePicker       | function  |                   | Function to close picker
items             | array     |                   | Array of {label, value} items
leftText          | string    | 'Cancel'          | Left button text (iOS)
rightText         | string    | 'OK'              | Right button text (iOS)
onValueChange     | function  |                   | Function to handle value changes
overlayColor      | string    | 'rgba(0,0,0,0.5)' | Modal overlay background color
style             | object    |                   | Modal container styles
visible           | boolean   | false             | Is picker visible or not
renderButtonsIOS  | function  |                   | Custom function to render modal buttons on iOS

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
