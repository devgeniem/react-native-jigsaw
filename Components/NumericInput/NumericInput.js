import React, { PureComponent } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles'
import { Colors } from '../../Themes'

const DEFAULT_COLOR = Colors.default

export default class NumericInput extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      text: props.value.toString()
    }
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        text: nextProps.value.toString()
      })
    }
  }

  textToFloat = (text) => {
    let number = parseFloat(text)
    if (isNaN(number)) number = 0
    return number
  }

  /* Apply min and max limits to given value */
  applyLimits = (value) => {
    const {min, max} = this.props
    let limitedValue = value
    if (min != null) {
      limitedValue = Math.max(min, limitedValue)
    }
    if (max != null) {
      limitedValue = Math.min(max, limitedValue)
    }
    return limitedValue
  }

  handleUpPress = () => {
    const {text} = this.state
    let number = this.textToFloat(text)
    number += this.props.step
    number = this.applyLimits(Math.floor(number))
    this.props.onValueChange(number)
  }

  handleDownPress = () => {
    const {text} = this.state
    let number = this.textToFloat(text)
    number -= this.props.step
    number = this.applyLimits(Math.ceil(number))
    this.props.onValueChange(number)
  }

  handleTextChange = (text) => {
    const {integerMode} = this.props

    // Remove invalid characters and transform commas to dots
    let newText = text.replace(/[^0-9.,-]/g, '').replace(/,/g, '.')

    // Remove dots in integer mode
    if (integerMode) {
      newText = newText.replace(/\./g, '')
    } else {
      // Remove all but first dot
      newText = newText.split('.')
      newText = newText.shift() + (newText.length ? '.' + newText.join('') : '')

      // Add leading zero if text begins with dot
      if (newText.length && newText[0] === '.') {
        newText = '0' + newText
      }
    }

    // Only update internal state. Actual prop will update on blur.
    this.setState({text: newText})
  }

  /* Handle input focus blur */
  handleBlur = () => {
    const {text} = this.state
    let number = parseFloat(text)
    if (isNaN(number)) {
      number = 0
    }
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
        <TouchableOpacity activeOpacity={0.8} onPress={this.handleDownPress} style={styles.buttonLeft}>
          <Icon name='md-remove' size={20} color={iconColor} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={this.handleUpPress} style={styles.buttonRight}>
          <Icon name='md-add' size={20} color={iconColor} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }

  getCustomInputStyles = () => {
    const { width, height, borderRadius, borderWidth, borderColor, backgroundColor, padding, paddingHorizontal, paddingVertical } = this.props
    const customStyles = {
      ...(width ? {width} : {}),
      ...(height ? {height} : {}),
      ...(borderRadius ? {borderRadius} : {}),
      ...(borderWidth ? {borderWidth} : {}),
      ...(backgroundColor ? {backgroundColor} : {}),
      ...(padding ? {padding} : {}),
      ...(paddingVertical ? {paddingVertical} : {}),
      ...(paddingHorizontal ? {paddingHorizontal} : {})
    }
    return customStyles
  }

  render () {
    const { text } = this.state
    const { color, borderColor, textColor } = this.props

    const colorStyles = {
      borderColor: borderColor || color || DEFAULT_COLOR,
      color: textColor || color || DEFAULT_COLOR
    }
    const customStyles = this.getCustomInputStyles()
    const textInputStyles = [colorStyles, styles.textInput, customStyles]

    return (
      <View style={styles.container}>
        <TextInput
          style={textInputStyles}
          value={text}
          onChangeText={this.handleTextChange}
          keyboardType='numbers-and-punctuation'
          onBlur={this.handleBlur}
        />
        {this.renderButtons()}
      </View>
    )
  }
}
