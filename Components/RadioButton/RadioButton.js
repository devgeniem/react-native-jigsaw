import React, { PureComponent } from 'react'
import { TouchableOpacity, Animated, Easing } from 'react-native'
import styles from './Styles'

export default class RadioButton extends PureComponent {
  constructor (props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
  }

  componentWillReceiveProps (nextProps) {
    /* Start animation when component receives next props. */
    const nextVal = nextProps.checked ? 1 : 0
    Animated.timing(
      this.animatedValue,
      {
        toValue: nextVal,
        duration: 100,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true
      }
    ).start()
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

    return <Animated.View style={[this.getDotStyle(), {transform: [{scale}], opacity}]} />
  }

  getContainerStyle = () => this.props.containerStyle || styles.container
  getDotStyle = () => this.props.dotStyle || styles.dot

  render () {
    return (
      <TouchableOpacity onPress={this.props.onChange} style={this.getContainerStyle()} activeOpacity={0.8}>
        {this.renderCheck()}
      </TouchableOpacity>
    )
  }
}
