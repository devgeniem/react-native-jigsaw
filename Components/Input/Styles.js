import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input: {
    color: Colors.violet,
    width: '80%',
    height: 50,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    fontSize: 14,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 2,
    borderColor: Colors.violet
  },
  inputIcon: {
    paddingLeft: 16,
    position: 'absolute',
    elevation: 1,
    alignSelf: 'center',
    zIndex: 2,
    backgroundColor: Colors.transparent
  }
})
