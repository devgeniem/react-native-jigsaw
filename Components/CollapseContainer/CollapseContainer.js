import React, { Component } from 'react'
import { View, Animated, Easing } from 'react-native'
import styles from './Styles'

export default class CollapseContainer extends Component {
  constructor (props) {
    super(props)
    const animatedValueInit = props.visible ? 1 : 0
    this.animatedValue = new Animated.Value(animatedValueInit)

    this.state = {
      initialized: false,
      maxHeight: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    /* Start animation when component receives next props. */
    const nextVal = nextProps.visible ? 1 : 0

    const duration = nextProps.animationDuration != null ? nextProps.animationDuration : 250

    Animated.timing(
      this.animatedValue,
      {
        toValue: nextVal,
        duration,
        easing: Easing.inOut(Easing.quad)
      }
    ).start()
  }

  /* Save max height of bodyContainer */
  setMaxHeight = (event) => this.setState({
    initialized: true,
    maxHeight: event.nativeEvent.layout.height
  })

  render () {
    const { style } = this.props

    /**
     * When component renders for the first time we save the max height of body to component's state.
     * Body is rendered inside a hidden and absolute positioned container to avoid it showing on Android.
     */
    if (!this.state.initialized) {
      return (
        <View onLayout={this.setMaxHeight} style={styles.hidden}>
          <View style={style}>
            {this.props.children}
          </View>
        </View>
      )
    }

    /* Use animated height and opacity changes */
    const maxHeight = this.animatedValue.interpolate({
      inputRange: [0, 0.999999, 1],
      outputRange: [0, this.state.maxHeight, 'auto'] // Use 'auto' as final value to enable container expanding
    })

    return (
      <Animated.View style={[{maxHeight}, styles.container]}>
        <Animated.View style={style}>
          {this.props.children}
        </Animated.View>
      </Animated.View>
    )
  }
}
