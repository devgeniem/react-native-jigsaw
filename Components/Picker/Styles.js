import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  modalAndroid: {
    maxHeight: '75%',
    width: '90%',
    backgroundColor: Colors.white
  },
  pickerItemAndroid: {
    padding: 16
  },
  pickerItemLabelAndroid: {
    fontSize: 16,
    color: Colors.text
  },
  buttons: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  spacer: {
    height: 8
  }
})
