Back to [react-native-jigsaw](../../README.md)

Button component
================
### API
Prop name        | Type      | Default   | Description
---------------- | --------- | --------- | ------------------------------------------------------
secondary        | boolean   | false     | Use secondary button theme
iosUnderlayColor | string    | '#540052' | TouchableHighlight underlay color (iOS, Android < v.5)
loaderColor      | string    | 'white'   | Loader color
largeLoader      | boolean   | false     | Show large loader
loading          | boolean   | false     | Is loading
disabled         | boolean   | false     | Is disabled
opacity          | boolean   | false     | Use TouchableOpacity (iOS, Android < v.5)
rippleColor      | string    | 'white'   | Ripple color (Android)
onPress          | function  |           | onPress function
buttonStyle      | object    |           | Button custom styles (overrides default styles)
textStyle        | object    |           | Text custom styles (overrides default styles)
leftIcon         | Component |           | Component shown on left
rightIcon        | Component |           | Component shown on right
width            | number    |           | Button width
height           | number    |           | Button height
borderRadius     | number    |           | Button border radius
borderWidth      | number    |           | Button border width 
borderColor      | string    |           | Button border color
backgroundColor  | object    |           | Button background color
margin           | number    |           | Button margin
padding          | number    |           | Button padding
color            | string    |           | Button text color
fontSize         | number    |           | Button text font size
fontFamily       | string    |           | Button text font family
textMargin       | number    |           | Button text margin
textPadding      | number    |           | Button text padding


### Code example

```jsx
import { Button } from 'react-native-jigsaw'

<Button text='Primary Button' onPress={this.onPress} />
```
