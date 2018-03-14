import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
  },
  textInput: {
    borderWidth: 2,
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 0,
    fontSize: 18
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
  icon: {
    backgroundColor: Colors.transparent
  }
})
