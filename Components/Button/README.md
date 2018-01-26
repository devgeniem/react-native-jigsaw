Back to [react-native-jigsaw](../../README.md)

Button component
================
### API
Prop name        | Type     | Default | Description
---------------- | -------- | ------- | ------------------
buttonStyle      | object   |         | Button styles
containerStyle   | object   |         | Container styles
iosUnderlayColor | string   |         | iOS underlay color
loaderColor      | string   | 'white' | Loader color
loading          | boolean  | false   | Is loading
onPress          | function |         | onPress callback
opacity          | boolean  | false   | Opacity on/off
rippleColor      | string   | 'white' | Ripple color
textStyle        | object   |         | Text tyles

### Code example

```jsx
import { Button } from 'react-native-jigsaw'

<Button
  onPress={this.onButtonPress}
  loading={this.isLoading}
>
```
