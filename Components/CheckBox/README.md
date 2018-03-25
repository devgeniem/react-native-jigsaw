Back to [react-native-jigsaw](../../README.md)

CheckBox component
================
### API
Prop name        | Type      | Default   | Description
---------------- | --------- | --------- | ------------------
checked          | boolean   | false     | Is checkbox checked or not
color            | string    | '#780076' | Set checkbox color
invert           | boolean   | false     | Use inverted checkbox style
onPress          | function  |           | Function that gets called on checkbox press
renderCheck      | function  |           | Replaces the default check
size             | number    | 32        | CheckBox size
style            | object    |           | CheckBox styles

### Code example

```jsx
<div>
<CheckBox
  onPress={this.toggleCheck}
  checked
  color='#000'
/>
<br />
<CheckBox
  onPress={this.toggleCheck}
  checked={false}
  color='#000'
/>
</div>
```
