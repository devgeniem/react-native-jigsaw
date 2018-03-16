Back to [react-native-jigsaw](../../README.md)

NumericInput component
================
### API
Prop name        | Type      | Default   | Description
---------------- | --------- | --------- | --------------------------------------------------------------
buttonColor      | string    | '#780076' | Button color
onValueChange    | function  |           | Function to change value
renderButtons    | function  |           | Render custom buttons inside input (overrides default buttons)
...              |           |           | You can use any props available to [TextInput](https://facebook.github.io/react-native/docs/textinput.html) and [Input](../Input/README.md)

### Code example

```jsx
import { NumericInput } from 'react-native-jigsaw'

<NumericInput
  value={this.state.numericValue}
  onValueChange={this.setNumericValue}
  step={1}
  min={-100}
  max={100}
/>
```
