import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import ButtonScreen from '../Containers/ButtonScreen'
import CheckBoxScreen from '../Containers/CheckBoxScreen'
import InputScreen from '../Containers/InputScreen'
import DateTimeScreen from '../Containers/DateTimeScreen'
import CollapseScreen from '../Containers/CollapseScreen'
import AutoHideHeaderListScreen from '../Containers/AutoHideHeaderListScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ButtonScreen: { screen: ButtonScreen },
  CheckBoxScreen: { screen: CheckBoxScreen },
  InputScreen: { screen: InputScreen },
  DateTimeScreen: { screen: DateTimeScreen },
  CollapseScreen: { screen: CollapseScreen },
  AutoHideHeaderListScreen: { screen: AutoHideHeaderListScreen }
}, {
  // Default config for all screens
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
  }
})

export default PrimaryNav
