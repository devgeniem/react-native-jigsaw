import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  },
  title: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 8,
    color: Colors.violet
  },
  row: {
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: Colors.violet
  },

  customCheck: {
    height: 0,
    width: 0,

    borderLeftWidth: 10,
    borderLeftColor: '#0f0',
    borderRightWidth: 10,
    borderRightColor: '#00f',
    borderTopWidth: 10,
    borderTopColor: '#ff0',
    borderBottomWidth: 10,
    borderBottomColor: '#f00'
  }

})
