Back to [react-native-jigsaw](../../README.md)

CollapseContainer component
================
### API
Prop name         | Type      | Default | Description
----------------- | --------- | ------- | ------------------
animationDuration | number    | 250     | Animation duration in milliseconds
style             | object    |         | Container style
visible           | bool      | false   | Is container visible or not

### Code example

```jsx
import { CollapseContainer } from 'react-native-jigsaw'

<CollapseContainer
  visible={this.state.contentVisible}
>
  <Text>Hello world</Text>
</CollapseContainer>
```
