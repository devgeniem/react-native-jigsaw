import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles'
import { Colors } from '../../Themes'
import Input from '../Input/Input'

const DEFAULT_COLOR = Colors.default

export default class NumericInput extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      text: (props.value != null) ? props.value.toString() : '',
      stepMultiplier: 1
    }

    this.timerSpeed = 500
    this.timerUp = null
    this.timerDown = null
  }

  componentWillUnmount () {
    this.stopTimers()
  }

  increaseStepMultiplier = () => {
    const { stepMultiplier } = this.state
    this.setState({
      stepMultiplier: stepMultiplier + 1
    })
  }

  stopTimers = () => {
    clearTimeout(this.timerUp)
    clearTimeout(this.timerDown)
    this.timerSpeed = 500

    // Reset step multiplier
    this.setState({
      stepMultiplier: 1
    })
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        text: (nextProps.value != null) ? nextProps.value.toString() : ''
      })
    }
  }

  textToFloat = (text) => {
    let number = parseFloat(text)
    if (isNaN(number)) number = 0
    return number
  }

  /* Apply min and max limits and precision to given value */
  applyLimits = (value) => {
    const { min, max, precision } = this.props
    let limitedValue = value
    if (min != null) {
      limitedValue = Math.max(min, limitedValue)
    }
    if (max != null) {
      limitedValue = Math.min(max, limitedValue)
    }

    // Apply precision
    return +limitedValue.toFixed((precision || 0))
  }

  handleUpPress = () => {
    const { text, stepMultiplier } = this.state
    let number = this.textToFloat(text)
    number += stepMultiplier * (this.props.step || 1)
    number = this.applyLimits(number)
    this.props.onValueChange(number)
  }

  handleDownPress = () => {
    const { text, stepMultiplier } = this.state
    let number = this.textToFloat(text)
    number -= stepMultiplier * (this.props.step || 1)
    number = this.applyLimits(number)
    this.props.onValueChange(number)
  }

  handleHoldUp = () => {
    this.handleUpPress()
    // Increase timer speed
    this.timerSpeed = Math.max(this.timerSpeed - 100, 10)
    this.timerUp = setTimeout(this.handleHoldUp, this.timerSpeed)
    this.increaseStepMultiplier()
  }

  handleHoldDown = () => {
    this.handleDownPress()
    // Increase timer speed
    this.timerSpeed = Math.max(this.timerSpeed - 100, 10)
    this.timerDown = setTimeout(this.handleHoldDown, this.timerSpeed)
    this.increaseStepMultiplier()
  }

  handleTextChange = (text) => {
    const { precision } = this.props

    // Remove invalid characters and transform commas to dots
    let newText = text.replace(/[^0-9.,-]/g, '').replace(/,/g, '.')

    if (precision && precision > 0) {
      // Remove all but first dot
      newText = newText.split('.')
      newText = newText.shift() + (newText.length ? '.' + newText.join('') : '')

      // Add leading zero if text begins with dot
      if (newText.length && newText[0] === '.') {
        newText = '0' + newText
      }
    } else {
      // Remove dots in integer mode
      newText = newText.replace(/\./g, '')
    }

    // Only update internal state. Actual prop will update on blur.
    this.setState({text: newText})
  }

  /* Handle input focus blur */
  handleBlur = () => {
    const {text} = this.state
    let number = this.textToFloat(text)
    number = this.applyLimits(number)
    this.setState({text: number.toString()})
    this.props.onValueChange(number)
  }

  renderButtons = () => {
    const { buttonColor, color, renderButtons } = this.props
    if (renderButtons) {
      /* Render custom buttons. Pass up and down action handlers. */
      return renderButtons(this.handleUpPress, this.handleDownPress)
    }

    /* Use default buttons */

    const iconColor = buttonColor || color || DEFAULT_COLOR
    return (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity activeOpacity={0.5} onPressIn={this.handleHoldDown} onPressOut={this.stopTimers} style={styles.buttonLeft}>
          <Icon name='md-remove' size={20} color={iconColor} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPressIn={this.handleHoldUp} onPressOut={this.stopTimers} style={styles.buttonRight}>
          <Icon name='md-add' size={20} color={iconColor} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    const { text } = this.state
    return (
      <Input
        onChangeText={this.handleTextChange}
        keyboardType='numbers-and-punctuation'
        onBlur={this.handleBlur}
        rightContent={this.renderButtons()}
        {...this.props}
        value={text}
      />
    )
  }
}
