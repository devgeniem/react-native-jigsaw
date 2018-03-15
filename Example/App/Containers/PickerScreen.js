import React, { Component } from 'react'
import { ScrollView, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../Themes'
import { Picker, Input } from '../../../Components'
import Header from '../Components/Header'
import styles from './Styles/PickerScreenStyles'

const ITEMS = [
  { value: 0, label: 'Option 1' },
  { value: 1, label: 'Option 2' },
  { value: 2, label: 'Option 3' },
  { value: 3, label: 'Option 4' },
  { value: 4, label: 'Option 5' },
  { value: 5, label: 'Option 6' },
  { value: 6, label: 'Option 7' },
  { value: 7, label: 'Option 8' },
  { value: 8, label: 'Option 9' },
  { value: 9, label: 'Option 10' },
  { value: 10, label: 'Option 11' },
  { value: 11, label: 'Option 12' },
  { value: 12, label: 'Option 13' },
  { value: 13, label: 'Option 14' },
  { value: 14, label: 'Option 15' },
  { value: 15, label: 'Option 16' }
]

export default class PickerScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      pickerVisible: false,
      pickerValue: null
    }
  }

  togglePicker = () => {
    Keyboard.dismiss()
    this.setState({ pickerVisible: !this.state.pickerVisible })
  }

  setPickerValue = (value) => this.setState({ pickerValue: value })

  render () {
    const { pickerVisible, pickerValue } = this.state
    return (
      <ScrollView style={styles.container}>
        <Input
          value={pickerValue != null ? ITEMS[pickerValue].label : null}
          onFocus={this.togglePicker}
          placeholder='Select value...'
          rightContent={<Icon name='ios-arrow-down' size={24} color={Colors.violet} style={styles.rightIcon} pointerEvents='none' />}
        />
        <Picker
          items={ITEMS}
          visible={pickerVisible}
          value={pickerValue}
          closePicker={this.togglePicker}
          onValueChange={this.setPickerValue}
        />
      </ScrollView>
    )
  }
}
