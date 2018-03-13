import React, { PureComponent } from 'react'
import { View } from 'react-native'
import CheckBox from '../CheckBox/CheckBox'
import styles from './Styles'
import { Colors } from '../../Themes'

const DEFAULT_SIZE = 32
const DEFAULT_COLOR = Colors.default

export default class RadioButton extends PureComponent {
  renderDefaultCheck = () => {
    /* Render circle to the center of the radio button */
    const { size, color, invert } = this.props
    const checkSize = Math.floor((size || DEFAULT_SIZE) * 0.5)
    const checkStyle = {
      backgroundColor: invert ? Colors.white : (color || DEFAULT_COLOR),
      width: checkSize,
      height: checkSize,
      borderRadius: Math.round(checkSize * 0.5)
    }

    return (
      <View style={checkStyle} />
    )
  }

  render () {
    const {
      checked,
      color,
      disabled,
      invert,
      onPress,
      renderCheck,
      size,
      style
    } = this.props

    const checkBoxColor = color || DEFAULT_COLOR
    const containerSize = size || DEFAULT_SIZE

    const dynamicStyles = {
      borderColor: checkBoxColor,
      borderRadius: Math.round((containerSize) * 0.5),
      width: containerSize,
      height: containerSize,
      backgroundColor: invert ? checkBoxColor : Colors.white
    }
    const containerStyle = style || [dynamicStyles, styles.container]

    return (
      <CheckBox
        checked={checked}
        color={checkBoxColor}
        disabled={disabled}
        onPress={onPress}
        renderCheck={renderCheck || this.renderDefaultCheck}
        size={containerSize}
        style={containerStyle}
        invert={invert}
      />
    )
  }
}
