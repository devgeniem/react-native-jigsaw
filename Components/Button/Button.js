import React from 'react'
import { View, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import { Colors } from '../../Themes'
import styles from './Styles'

export default class Button extends React.PureComponent {
  /* Wrap onPress inside requestAnimationFrame to allow Ripple effect to work properly */
  onPress = () => window.requestAnimationFrame(() => this.props.onPress())

  getButtonStyle = () => {
    const { buttonStyle, secondary } = this.props
    return buttonStyle || secondary ? styles.secondaryButton : styles.primaryButton
  }

  getCustomButtonStyles = () => {
    const { width, height, borderRadius, borderWidth, borderColor, backgroundColor, margin, padding } = this.props
    const customStyles = {
      ...(width ? {width} : {}),
      ...(height ? {height} : {}),
      ...(borderRadius ? {borderRadius} : {}),
      ...(borderWidth ? {borderWidth} : {}),
      ...(borderColor ? {borderColor} : {}),
      ...(backgroundColor ? {backgroundColor} : {}),
      ...(margin ? {margin} : {}),
      ...(padding ? {padding} : {})
    }
    return customStyles
  }

  getTextStyle = () => {
    const { textStyle, secondary } = this.props
    return textStyle || secondary ? styles.secondaryText : styles.primaryText
  }

  getCustomTextStyles = () => {
    const { color, fontSize, fontWeight, fontFamily, textMargin, textPadding } = this.props
    const customStyles = {
      ...(color ? {color} : {}),
      ...(fontSize ? {fontSize} : {}),
      ...(fontWeight ? {fontWeight} : {}),
      ...(fontFamily ? {fontFamily} : {}),
      ...(textMargin ? {margin: textMargin} : {}),
      ...(textPadding ? {padding: textPadding} : {})
    }
    return customStyles
  }

  getRippleColor = () => {
    const { rippleColor, secondary } = this.props
    return rippleColor || secondary ? Colors.violet : Colors.white
  }

  getIosUnderlayColor = () => {
    const { iosUnderlayColor, secondary } = this.props
    return iosUnderlayColor || secondary ? Colors.secondaryUnderlay : Colors.primaryUnderlay
  }

  renderLoader = () => {
    const { loaderColor, largeLoader, secondary } = this.props
    /* Default color for loader is white */
    const color = loaderColor || secondary ? Colors.violet : Colors.white
    /* Default loader size is small */
    const loaderSize = largeLoader ? 'large' : 'small'

    return <ActivityIndicator color={color} size={loaderSize} />
  }

  renderLeftIcon = () => this.props.leftIcon || null
  renderRightIcon = () => this.props.rightIcon || null

  renderDisabled = () => {
    if (this.props.disabled) return <View style={styles.disabled} />
    return null
  }

  renderContent = () => {
    const { loading, text, renderContent } = this.props

    if (renderContent) return renderContent()
    if (loading) return this.renderLoader()

    const style = this.getTextStyle()
    const customStyle = this.getCustomTextStyles()

    return <Text style={[style, customStyle]}>{text}</Text>
  }

  renderButton = () => {
    const style = this.getButtonStyle()
    const customStyle = this.getCustomButtonStyles()
    const ripple = this.getRippleColor()
    const iosUnderlayColor = this.getIosUnderlayColor()
    const disabled = this.props.loading || this.props.disabled

    if (Platform.OS === 'android' && Platform.Version > 20) {
      return (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(ripple, false)}
          onPress={this.onPress}
          disabled={disabled}
        >
          <View style={[style, customStyle]}>
            { this.renderLeftIcon() }
            { this.renderContent() }
            { this.renderRightIcon() }
            { this.renderDisabled() }
          </View>
        </TouchableNativeFeedback>
      )
    } else {
      if (this.props.opacity) {
        return (
          <TouchableOpacity
            style={[style, customStyle]}
            onPress={this.onPress}
            disabled={disabled}
          >
            { this.renderLeftIcon() }
            { this.renderContent() }
            { this.renderRightIcon() }
            { this.renderDisabled() }
          </TouchableOpacity>
        )
      }
      return (
        <TouchableHighlight
          style={[style, customStyle]}
          onPress={this.onPress}
          underlayColor={iosUnderlayColor}
          disabled={disabled}
        >
          <View style={styles.flex}>
            { this.renderLeftIcon() }
            { this.renderContent() }
            { this.renderRightIcon() }
            { this.renderDisabled() }
          </View>
        </TouchableHighlight>
      )
    }
  }

  render () {
    return this.renderButton()
  }
}
