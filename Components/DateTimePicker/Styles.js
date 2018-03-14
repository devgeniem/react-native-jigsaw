import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: 50,
    width: '80%',
    borderWidth: 2,
    borderColor: Colors.violet,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  label: {
    flex: 1,
    color: Colors.violet,
    fontSize: 14,
    textAlign: 'center'
  },
  disabledLabel: {
    flex: 1,
    color: Colors.placeholderColor,
    fontSize: 14
  },
  /**
   * iOS styles
   */
  pickerHeaderIOS: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: Colors.iOSGrey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.hairline
  },
  pickerHeaderTextIOS: {
    color: Colors.blue,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right'
  },
  modalCloseArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.transparent
  },
  modalContentContainer: {
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
})
