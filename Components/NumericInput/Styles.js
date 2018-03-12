import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../Themes'

const { width } = Dimensions.get('window')

const fontSize = (width < 330) ? 16 : 18

export default StyleSheet.create({
  container: {

  },
  textInput: {
    borderColor: Colors.lightGreyDarken,
    borderWidth: 1,
    backgroundColor: Colors.lightGrey,
    color: Colors.text,
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: fontSize,
    fontFamily: Fonts.type.base,
    fontWeight: '600'
  },
  buttonsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonLeft: {
    paddingLeft: 8,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRight: {
    paddingRight: 8,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sign: {
    color: Colors.orange,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
    fontSize: 24,
    height: 24,
    lineHeight: 24
  }
})
