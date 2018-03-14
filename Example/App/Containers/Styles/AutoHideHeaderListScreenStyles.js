import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: 150,
    backgroundColor: Colors.violet,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    alignSelf: 'center',
    margin: 20
  },
  text: {
    fontSize: 64,
    color: Colors.violet
  },
  title: {
    fontSize: 48,
    color: Colors.white
  }
})
