Back to [react-native-jigsaw](../../README.md)

NumericInput component
================
### API
Prop name        | Type     | Default | Description
---------------- | -------- | ------- | ------------------
onValueChange    | function |         |
max              | number   |         | Maximum value
min              | number   |         | Minimum valueste
step             | number   |         |
integer          | boolean  | false   | Allow only integer values
value            | number   |         | NumericInput value

### Code example

```jsx
import { NumericInput } from 'react-native-jigsaw'

<NumericInput
  value={this.state.value}
  onValueChange={this.setValue}
  step={1}
  min={0}
  max={100}
/>
```
