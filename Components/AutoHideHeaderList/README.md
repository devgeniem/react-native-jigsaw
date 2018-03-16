Back to [react-native-jigsaw](../../README.md)

AutoHideHeaderContainer component
================
### API
Prop name        | Type      | Default   | Description
---------------- | --------- | --------- | ------------------------------------------------------
header           | component |           | Component to render as header
headerMinHeight  | number    |           | Minimum height for header
headerMaxHeight  | number    |           | Maximum height for header
...              |           |           | You can use any props available to [FlatList](https://facebook.github.io/react-native/docs/flatlist.html)


### Code example

```jsx
import { AutoHideHeaderList } from 'react-native-jigsaw'

<AutoHideHeaderList
  data={data}
  keyExtractor={this.keyExtractor}
  renderItem={this.renderItem}
  headerMinHeight={0}
  headerMaxHeight={150}
  header={this.header()}
/>
```
