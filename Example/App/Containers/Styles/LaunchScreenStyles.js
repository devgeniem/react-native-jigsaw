import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: 'white',
    paddingBottom: Metrics.baseMargin
  },
  title: {
    fontSize: 18
  }
})
