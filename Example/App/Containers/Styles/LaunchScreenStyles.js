import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 15
  },
  link: {
    color: Colors.violet,
    fontSize: 20,
    paddingVertical: 12
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: Colors.violet
  },
  title: {
    color: Colors.white,
    fontSize: 20
  }
})
