Jigsaw - React native component library
=======================================

React Native Jigsaw is a component collection that provides a set of commonly used components in React Native Apps. Components use sane default styles but can be easily customized to fit your app’s look and feel. The main purpose of this library is to provide well-documented and easy-to-use components that you can use to avoid ‘reinventing the wheel’ experience and to shorten developing time.

All components support Android and iOS platforms. Jigsaw provides components with easy to use platform agnostic API’s to make multi platform development easier. All of the components can be imported individually to your project as needed.

## Installation
`npm install react-native-jigsaw --save`

## Components
- [Button](./Components/Button/README.md)
- [CheckBox](./Components/CheckBox/README.md)
- [RadioButton](./Components/RadioButton/README.md)
- [Input](./Components/Input/README.md)
- [NumericInput](./Components/NumericInput/README.md)
- [Rating](./Components/Rating/README.md)
- [Picker](./Components/Picker/README.md)
- [DropdownPicker](./Components/DropdownPicker/README.md)
- [DateTimePicker](./Components/DateTimePicker/README.md)
- [CollapseContainer](./Components/CollapseContainer/README.md)
- [ModalContainer](./Components/ModalContainer/README.md)
- [AutoHideHeaderList](./Components/AutoHideHeaderList/README.md)

  
## Example
  
<img src="https://github.com/devgeniem/react-native-jigsaw/blob/master/Example/demo.gif?raw=true" />
  
Project contains an Example app to try out the components. You can run the Example app with the following steps:

1. Clone this repo
2. Run `npm install` both in project root and in /Example directories
3. `react-native run-ios` inside /Example directory
  
## TODO
  
- [ ] Slider
- [ ] Timer
- [ ] Linear gradient button
- [ ] Calendar
- [ ] Stepper
- [ ] Progress
  
## Contributing

If you find any bugs or problems, please open an issue.

If you want to submit a pull request, please make sure that:
  
- Code is linted according to [Standard](https://standardjs.com/) style.
- All component props are documented.
- Documentation follows the form of project's components. See [Button](./Components/Button/README.md) documentation as an example.
- Ensure that component builds and works as expected.
- Add example of the component usage to the Example app.
  
## License

[MIT License](./LICENSE)
