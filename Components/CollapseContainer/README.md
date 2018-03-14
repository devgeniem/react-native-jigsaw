Back to [react-native-jigsaw](../../README.md)

CollapseContainer component
================
### API
Prop name         | Type      | Default | Description
----------------- | --------- | ------- | ------------------
visible           | bool      | false   | Is container visible or not
animationDuration | integer   | 250     | Animation duration in milliseconds

### Code example

```jsx
import { CollapseContainer } from 'react-native-jigsaw'

<CollapseContainer
  visible={this.state.contentVisible}
  style={{ backgroundColor: 'red', padding: 8 }}
>
  <Text>Hello world</Text>
</CollapseContainer>
```
