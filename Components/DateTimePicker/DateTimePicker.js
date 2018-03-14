import React from 'react'
import { View, Text, TouchableOpacity, Platform, DatePickerAndroid, TimePickerAndroid, DatePickerIOS } from 'react-native'
import { Colors } from '../../Themes'
import styles from './Styles'

export default class DateTimePicker extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps (nextProps) {
    if (Platform.OS === 'android' && !this.props.visible && nextProps.visible) {
      this.openAndroid()
    }
  }

  openAndroid = async () => {
    const { type, value, onChange, closePicker } = this.props

    if (type === 'time') {
      const { hour, minute } = value
      let time = await TimePickerAndroid.open({ hour, minute, is24Hour: true, mode: 'spinner' })
      if (time.action !== TimePickerAndroid.dismissedAction) {
        time = { hour: time.hour, minute: time.minute }
        return onChange(time)
      }
    } else {
      let date = await DatePickerAndroid.open({ value })
      /* Update selected date if OK button was pressed */
      if (date.action !== DatePickerAndroid.dismissedAction) {
        date = new Date(date.year, date.month, date.day)
        return onChange(date)
      }
    }
    closePicker()
  }

  iosTimeChange = (value) => this.setState({ value })

  renderIOS = () => {
    const { type, value, onChange } = this.props
    if (type === 'time') {
      const time = new Date(value)
      return <DatePickerIOS mode='time' date={time} onDateChange={this.iosTimeChange} />
    } else {
      return <DatePickerIOS mode='date' date={value} onDateChange={onChange} />
    }
  }

  renderPicker = () => Platform.OS === 'ios' ? this.renderIOS() : null

  render () {
    return this.props.visible ? this.renderPicker() : null
  }
}
