import { StyleSheet } from 'react-native'
import { Fonts } from '../../Themes'

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: Fonts.type.base
  }
})
