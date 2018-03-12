import React, { PureComponent } from 'react'
import { TouchableOpacity, Animated } from 'react-native'
import Icon from './Icon'
import { Colors } from '../Themes'

const hitSlop = { top: 10, left: 15, bottom: 10, right: 15 }

export default class Rating extends PureComponent {
  constructor (props) {
    super(props)
    this.animatedValue = new Animated.Value(1)
  }

  componentWillReceiveProps (nextProps) {
    const { rating, index } = nextProps
    /* Start animation when component receives next props. */
    if (rating !== this.props.rating && index === rating) {
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

  onPress = () => this.props.onChange(this.props.index)

  renderStar = () => {
    const { rating, index } = this.props
    const color = index <= rating ? Colors.orange : Colors.avatarFill
    return (
      <Animated.View style={{transform: [{scale: this.animatedValue}]}}>
        <Icon name='star-full' size={28} color={color} />
      </Animated.View>
    )
  }

  render () {
    return (
      <TouchableOpacity onPress={this.onPress} activeOpacity={0.8} hitSlop={hitSlop}>
        {this.renderStar()}
      </TouchableOpacity>
    )
  }
}
