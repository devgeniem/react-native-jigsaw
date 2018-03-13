import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import ButtonScreen from '../Containers/ButtonScreen'
import CheckBoxScreen from '../Containers/CheckBoxScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ButtonScreen: { screen: ButtonScreen },
  CheckBoxScreen: { screen: CheckBoxScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
  }
})

export default PrimaryNav
