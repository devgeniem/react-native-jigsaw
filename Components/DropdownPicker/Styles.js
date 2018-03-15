import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  itemStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '80%'
  },
  labelStyle: {
    fontSize: 18,
    color: Colors.violet
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
