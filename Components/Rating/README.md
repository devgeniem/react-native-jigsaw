Back to [react-native-jigsaw](../../README.md)

Rating component
================
### API
Prop name        | Type      | Default | Description
---------------- | --------- | ------- | ------------------
count            | integer   |         | Max number of stars
value            | integer   |         | Current value of stars
onValueChange    | function  |         | Gets called when user rates. Rating is passsed as a parameter.
star             | component |         | Star component to display
empty            | component |         | Empty component to display
style            | object    |         | Replaces the default container style

### Code example

```jsx
import { Rating } from 'react-native-jigsaw'

<Rating
  count={5}
  value={this.state.rating}
  onValueChange={this.setRating}
  star={<Icon name='star' />}
  empty={<Icon name='star-outline' />}
/>

```
