import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    paddingVertical: 30
  },
  leftIcon: {
    paddingLeft: 16,
    position: 'absolute',
    elevation: 1,
    alignSelf: 'center',
    zIndex: 2,
    backgroundColor: Colors.transparent
  }
})
