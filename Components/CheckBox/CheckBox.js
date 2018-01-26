import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Animated, Easing } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles'
import { Colors } from '../../Themes'

export default class CheckBox extends PureComponent {
  constructor (props) {
    super(props)
    const animatedValueInit = props.checked ? 1 : 0
    this.animatedValue = new Animated.Value(animatedValueInit)
  }

  componentWillReceiveProps (nextProps) {
    /* Start animation when component receives next props. */
    const nextVal = nextProps.checked ? 1 : 0
    Animated.timing(
      this.animatedValue,
      {
        toValue: nextVal,
        duration: 250,
        easing: Easing.inOut(Easing.quad)
      }
    ).start()
  }

  renderCheckIcon = () => {
    const {checkComponent, checkColor} = this.props
    /* Render custom check component */
    if (checkComponent) {
      return checkComponent
    }

    const color = checkColor ? checkColor : Colors.black
    return (
      <Icon name='md-checkmark' size={20} color={color} />
    )
  }

  renderCheck = () => {
    /* Use animated opacity and scale values */
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [0, 1, 1]
    })
    const scale = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [0.5, 1.2, 1]
    })

    return (
      <Animated.View style={{transform: [{scale}], opacity}}>
        {this.renderCheckIcon()}
      </Animated.View>
    )
  }

  render () {
    const {onChange, style} = this.props
    const containerStyle = style ? style : styles.container
    return (
      <TouchableOpacity onPress={onChange} style={containerStyle} activeOpacity={0.8}>
        <View style={styles.innerContainer}>
          {this.renderCheck()}
        </View>
      </TouchableOpacity>
    )
  }
}
