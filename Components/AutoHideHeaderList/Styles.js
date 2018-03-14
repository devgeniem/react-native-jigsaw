import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  header: {
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 2
  }
})
