import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    borderColor: Colors.lightGreyDarken,
    backgroundColor: Colors.light,
    borderWidth: 1,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    width: 28
  },
  dot: {
    backgroundColor: Colors.orange,
    borderRadius: 6,
    height: 12,
    width: 12
  }
})
