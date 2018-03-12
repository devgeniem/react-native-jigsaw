import React, { PureComponent } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles'
import { Colors } from '../../Themes'

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

  handleUpPress = () => {
    const {text} = this.state
    let number = parseFloat(text)
    if (isNaN(number)) {
      number = 0
    }
    number += this.props.step
    number = Math.floor(number)
    this.props.onValueChange(number)
  }
  handleDownPress = () => {
    const {text} = this.state
    let number = parseFloat(text)
    if (isNaN(number)) {
      number = 0
    }
    number -= this.props.step
    number = Math.floor(number)
    this.props.onValueChange(number)
  }

  renderArrows = () => {
    return (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.handleDownPress} style={styles.buttonLeft}>
          <Icon name='md-remove' size={20} color={Colors.orange} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={this.handleUpPress} style={styles.buttonRight}>
          <Icon name='md-add' size={20} color={Colors.orange} />
        </TouchableOpacity>
      </View>
    )
  }

  handleTextChange = (text) => {
    const {integerMode} = this.props

    // Remove invalid characters and transform comma to dot
    let newText = text.replace(/[^0-9.,-]/g, '').replace(/,/g, '.')

    if (integerMode) {
      newText = newText.replace(/\./g, '')
    }

    // Only update internal state. Actual prop will update on blur
    this.setState({text: newText})
  }

  handleBlur = () => {
    const {text} = this.state
    let number = parseFloat(text)
    if (isNaN(number)) {
      number = 0
    }
    this.setState({text: number.toString()})
    this.props.onValueChange(number)
  }

  render () {
    const {text} = this.state
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={this.handleTextChange}
          keyboardType='numbers-and-punctuation'
          onBlur={this.handleBlur}
        />
        {this.renderArrows()}
      </View>
    )
  }
}
