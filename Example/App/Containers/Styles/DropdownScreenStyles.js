import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 15,
    paddingVertical: 30
  },
  contentContainer: {
    flex: 1
  },
  rightIcon: {
    right: 16,
    position: 'absolute',
    elevation: 1,
    alignSelf: 'center',
    zIndex: 2,
    backgroundColor: Colors.transparent
  },
  separator: {
    height: 1,
    backgroundColor: Colors.placeholderColor
  }
})
