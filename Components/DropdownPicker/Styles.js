import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  itemStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  labelStyle: {
    paddingVertical: 12,
    fontSize: 18,
    color: Colors.violet,
    backgroundColor: Colors.transparent
  },
  listStyle: {
    alignSelf: 'center',
    width: '80%',
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: Colors.violet,
    height: 230
  },
  separator: {
    height: 1,
    backgroundColor: Colors.placeholderColor
  }
})
