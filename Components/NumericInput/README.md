Back to [react-native-jigsaw](../../README.md)

NumericInput component
================
### API
Prop name        | Type     | Default | Description
---------------- | -------- | ------- | ------------------
onValueChange    | function |         | Called when user has changed the value
max              | number   |         | Maximum value
min              | number   |         | Minimum value
precision        | number   | 0       | Number of decimals
step             | number   | 1       | Step for add and decrease buttons
value            | number   |         | NumericInput value

### Code example

```jsx
import { NumericInput } from 'react-native-jigsaw'

<NumericInput
  value={this.state.value}
  onValueChange={this.setValue}
  step={1}
  precision={0}
  min={0}
  max={100}
/>
```
