import React, { PureComponent } from 'react'
import { TouchableOpacity, Animated, View } from 'react-native'
import styles from './Styles'

export default class Rating extends PureComponent {
  constructor (props) {
    super(props)
    this.animatedValue = new Animated.Value(1)
  }

  renderStar = (star) => {
    if (star) {
      return (
        <Animated.View style={{transform: [{scale: this.animatedValue}]}}>
          {this.props.star}
        </Animated.View>
      )
    }
    return this.props.empty
  }

  componentWillReceiveProps (nextProps) {
    const { value } = nextProps
    // Start animation when component receives next props.
    if (value !== this.props.value) {
      this.animatedValue.setValue(1.2)
      Animated.spring(
        this.animatedValue,
        {
          toValue: 1,
          friction: 2,
          tension: 1,
          useNativeDriver: true
        }
      ).start()
    }
  }

  handlePress = (value) => {
    if (this.props.value === value) {
      return this.props.onValueChange(0)
    }
    return this.props.onValueChange(value)
  }

  renderStars = () => {
    const { count, value } = this.props
    let stars = []
    for (let i = 0; i < count; i++) {
      if (i + 1 <= value) {
        stars.push(true)
      } else {
        stars.push(false)
      }
    }
    return stars.map((star, index) => (
      <TouchableOpacity key={index} activeOpacity={0.75} onPress={() => this.handlePress(index + 1)}>
        { this.renderStar(star) }
      </TouchableOpacity>
    ))
  }

  render () {
    const style = this.props.style || styles.container
    return (
      <View style={style}>
        { this.renderStars() }
      </View>
    )
  }
}
