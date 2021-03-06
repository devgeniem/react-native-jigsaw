import React from 'react'
import { View, Platform, DatePickerAndroid, TimePickerAndroid, DatePickerIOS } from 'react-native'
import { ModalContainer, Button } from '..'
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

  iosChange = (value) => this.setState({ value })

  renderIosPickerType = () => {
    const { type } = this.props
    const { value } = this.state

    if (type === 'time') {
      let time
      if (!value.getMonth) {
        time = new Date()
        time.setHours(value.hour)
        time.setMinutes(value.minute)
        time.setSeconds(0)
        time.setMilliseconds(0)
      } else {
        time = value
      }
      return <DatePickerIOS mode='time' date={time} onDateChange={this.iosChange} />
    } else {
      return <DatePickerIOS mode='date' date={value} onDateChange={this.iosChange} />
    }
  }

  renderIosButtons = () => {
    const { closePicker, renderIosContent, leftText, rightText } = this.props

    if (renderIosContent) return renderIosContent(this.iosAcceptChange, closePicker)

    const leftButtonText = leftText || 'Cancel'
    const rightButtonText = rightText || 'OK'

    return (
      <View style={styles.buttons}>
        <View style={styles.buttonContainer}>
          <Button onPress={closePicker} text={leftButtonText} width='100%' secondary />
        </View>
        <View style={styles.spacer} />
        <View style={styles.buttonContainer}>
          <Button onPress={this.iosAcceptChange} text={rightButtonText} width='100%' />
        </View>
      </View>
    )
  }

  iosAcceptChange = () => {
    const { type, onChange } = this.props
    const { value } = this.state

    if (type === 'time') {
      try {
        const time = { hour: value.getHours(), minute: value.getMinutes() }
        return onChange(time)
      } catch (e) {
      }
    }
    return onChange(value)
  }

  renderIOS = () => (
    <ModalContainer>
      { this.renderIosPickerType() }
      { this.renderIosButtons() }
    </ModalContainer>
  )

  renderPicker = () => Platform.OS === 'ios' ? this.renderIOS() : null

  render () {
    return this.props.visible ? this.renderPicker() : null
  }
}
