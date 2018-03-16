import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import ButtonScreen from '../Containers/ButtonScreen'
import CheckBoxScreen from '../Containers/CheckBoxScreen'
import InputScreen from '../Containers/InputScreen'
import PickerScreen from '../Containers/PickerScreen'
import DateTimeScreen from '../Containers/DateTimeScreen'
import CollapseScreen from '../Containers/CollapseScreen'
import ModalScreen from '../Containers/ModalScreen'
import AutoHideHeaderListScreen from '../Containers/AutoHideHeaderListScreen'
import DropdownScreen from '../Containers/DropdownScreen'
import RatingScreen from '../Containers/RatingScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ButtonScreen: { screen: ButtonScreen },
  CheckBoxScreen: { screen: CheckBoxScreen },
  InputScreen: { screen: InputScreen },
  PickerScreen: { screen: PickerScreen },
  DateTimeScreen: { screen: DateTimeScreen },
  CollapseScreen: { screen: CollapseScreen },
  ModalScreen: { screen: ModalScreen },
  AutoHideHeaderListScreen: { screen: AutoHideHeaderListScreen },
  DropdownScreen: { screen: DropdownScreen },
  RatingScreen: { screen: RatingScreen }
}, {
  // Default config for all screens
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
  }
})

export default PrimaryNav
