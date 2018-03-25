Back to [react-native-jigsaw](../../README.md)

RadioButton component
================
### API
Prop name        | Type      | Default | Description
---------------- | --------- | ------- | ------------------
checked          | boolean   | false   | Is radio button checked or not
color            | string    |         | Set radio button color
invert           | boolean   | false   | Use inverted radio button style
onPress          | function  |         | Function that gets called on radio button press
renderCheck      | function  |         | Replaces the default check
size             | number    | 32      | RadioButton size
style            | object    |         | Radio button styles

### Code example

```jsx
<div>
<RadioButton
  onPress={this.toggleCheck}
  checked
  color='#000'
/>
<br />
<RadioButton
  onPress={this.toggleCheck}
  checked={false}
  color='#000'
/>
</div>
```
