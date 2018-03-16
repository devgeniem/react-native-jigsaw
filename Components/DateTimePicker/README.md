Back to [react-native-jigsaw](../../README.md)

DatePicker component
================
### API
Prop name        | Type      | Default   | Description
---------------- | --------- | --------- | -----------------------------------------------------------
type             | string    | 'date'    | Determines the type of the picker. One of: ['date', 'time']
value            | object    |           | Value of the picker
visible          | boolean   |           | Controls picker visibility
onChange         | function  |           | Function used to change the value
closePicker      | function  |           | Function used to close the picker


### Code example

```jsx
import { DateTimePicker } from 'react-native-jigsaw'

<DateTimePicker
  type='date'
  value={date}
  onChange={this.onChangeDate}
  visible={datePickerVisible}
  closePicker={this.closePicker}
/>
```
