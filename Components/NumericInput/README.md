Back to [react-native-jigsaw](../../README.md)

NumericInput component
================
### API

Prop name        | Type      | Default   | Description
---------------- | --------- | --------- | --------------------------------------------------------------
max              | number    |           | Maximum value
min              | number    |           | Minimum value
precision        | number    | 0         | Number of decimals
step             | number    | 1         | Step for add and decrease buttons
value            | number    |           | NumericInput value
buttonColor      | string    | '#780076' | Button color
onValueChange    | function  |           | Function to change value
renderButtons    | function  |           | Render custom buttons inside input (overrides default buttons)
...              |           |           | You can use any props available to [TextInput](https://facebook.github.io/react-native/docs/textinput.html) and [Input](../Input/README.md)

### Code example

```jsx
<NumericInput
  value={5}
  onValueChange={this.setValue}
  step={1}
  precision={0}
  min={0}
  max={100}
/>
```
