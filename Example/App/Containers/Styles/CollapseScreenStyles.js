import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 30
  },
  title: {
    fontSize: 32,
    marginTop: 12,
    marginBottom: 8
  },
  header: {
    backgroundColor: Colors.violet,
    padding: 12,
    marginTop: 8
  },
  headerText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 24
  },
  content: {
    fontSize: 16
  },
  contentContainer: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.violet,
    paddingHorizontal: 8,
    paddingTop: 4,
    paddingBottom: 16
  }
})
