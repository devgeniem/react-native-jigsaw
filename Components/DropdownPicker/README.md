Back to [react-native-jigsaw](../../README.md)

DropdownPicker component
================
### API
Prop name         | Type      | Default | Description
----------------- | --------- | ------- | ------------------
component         | component |         | Component to render before dropdown
items             | array     |         | Array of {label, value} items
onValueChange     | function  |         | Function to handle value changes
visible           | bool      | false   | Is dropdown visible or not

### Code example

```jsx
import { DropdownPicker, Button } from 'react-native-jigsaw'

const items = [{ label: 'First item', value: 1 }]

<DropdownPicker
  component={<Button onPress={this.toggleVisibility} text='Click'>}
  items={items}
  visible={this.state.visible}
  onValueChange={this.setValue}
  separatorComponent={<View style={styles.separator} />}
/>
```
