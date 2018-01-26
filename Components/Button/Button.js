import React from 'react'
import { View, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import { Colors } from '../../Themes'
import styles from './Styles'

export default class Button extends React.Component {
  onPress = () => window.requestAnimationFrame(() => this.props.onPress())

  renderLoader = () => {
    const color = this.props.loaderColor || Colors.white
    const loaderSize = this.props.largeLoader ? 'large' : 'small'
    return <ActivityIndicator color={color} size={loaderSize} />
  }

  renderButtonContent = () => {
    if (this.props.loading) return this.renderLoader()
    else if (this.props.textStyle) {
      return (
        <Text style={[styles.buttonText, this.props.textStyle]}>
          {this.props.text}
        </Text>
      )
    }
    return <Text style={styles.buttonText}>{this.props.text}</Text>
  }

  /* Set the color of the ripple effect (TouchableNativeFeedback) */
  getRippleColor = () => {
    if (this.props.rippleColor) return this.props.rippleColor
    return Colors.white
  }

  renderButton = () => {
    const { buttonStyle, iosUnderlayColor } = this.props

    if (Platform.OS === 'android' && Platform.Version > 20) {
      return (
        <TouchableNativeFeedback
          onPress={this.onPress}
          background={TouchableNativeFeedback.Ripple(this.getRippleColor(), false)}
        >
          <View style={[styles.button, buttonStyle]}>
            { this.renderButtonContent() }
          </View>
        </TouchableNativeFeedback>
      )
    } else {
      if (this.props.opacity) {
        return (
          <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={this.onPress}
          >
            { this.renderButtonContent() }
          </TouchableOpacity>
        )
      }
      return (
        <TouchableHighlight
          style={[styles.button, buttonStyle]}
          onPress={this.onPress}
          underlayColor={iosUnderlayColor}
        >
          { this.renderButtonContent() }
        </TouchableHighlight>
      )
    }
  }

  render () {
    return (
      <View style={this.props.containerStyle}>
        { this.renderButton() }
      </View>
    )
  }
}
