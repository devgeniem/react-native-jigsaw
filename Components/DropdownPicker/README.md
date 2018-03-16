Back to [react-native-jigsaw](../../README.md)

DropdownPicker component
================
### API
Prop name          | Type      | Default | Description
------------------ | --------- | ------- | ------------------
component          | component |         | Component to render before dropdown
dropdownHeight     | number    | 208     | Dropdown list height
items              | array     |         | Array of {label, value} items
listStyle          |           |         | Dropdown list style
onValueChange      | function  |         | Function to handle value changes
separatorComponent | component |         | Component to render between items of dropdown
visible            | bool      | false   | Is dropdown visible or not
...                |           |         | You can use any props available to [FlatList](https://facebook.github.io/react-native/docs/flatlist.html)

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
