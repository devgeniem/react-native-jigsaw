import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import { Colors } from '../../Themes'
import styles from './Styles'

export default class Input extends PureComponent {
  getInputStyle = () => this.props.inputStyle || styles.input
  getCustomStyle = () => {
    const {
      width,
      height,
      borderRadius,
      borderWidth,
      borderColor,
      fontSize,
      color,
      margin,
      marginVertical,
      marginHorizontal,
      padding,
      paddingVertical,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingHorizontal,
      textAlignVertical
    } = this.props

    const customStyles = {
      ...(width ? {width} : {}),
      ...(height ? {height} : {}),
      ...(borderRadius ? {borderRadius} : {}),
      ...(borderWidth ? {borderWidth} : {}),
      ...(borderColor ? {borderColor} : {}),
      ...(fontSize ? {fontSize} : {}),
      ...(color ? {color} : {}),
      ...(margin ? {margin} : {}),
      ...(marginVertical ? {marginVertical} : {}),
      ...(marginHorizontal ? {marginHorizontal} : {}),
      ...(padding ? {padding} : {}),
      ...(paddingVertical ? {paddingVertical} : {}),
      ...(paddingTop ? {paddingTop} : {}),
      ...(paddingBottom ? {paddingBottom} : {}),
      ...(paddingLeft ? {paddingLeft} : {}),
      ...(paddingRight ? {paddingRight} : {}),
      ...(paddingHorizontal ? {paddingHorizontal} : {}),
      ...(textAlignVertical ? {textAlignVertical} : {})
    }
    return customStyles
  }

  renderLeftContent = () => this.props.leftContent || null
  renderRightContent = () => this.props.rightContent || null

  renderInput = () => {
    const baseStyle = this.getInputStyle()
    const customStyle = this.getCustomStyle()

    return (
      <TextInput
        style={[baseStyle, customStyle]}
        underlineColorAndroid={Colors.transparent}
        selectionColor={Colors.violet}
        placeholderTextColor={Colors.placeholderColor}
        keyboardType='default'
        autoCapitalize='none'
        autoCorrect={false}
        {...this.props}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        { this.renderLeftContent() }
        { this.renderInput() }
        { this.renderRightContent() }
      </View>
    )
  }
}
