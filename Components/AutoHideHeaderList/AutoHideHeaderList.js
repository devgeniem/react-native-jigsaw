import React, { PureComponent } from 'react'
import { View, FlatList, Animated, Platform } from 'react-native'
import styles from './Styles'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export default class AutoHideHeaderList extends PureComponent {
  constructor (props) {
    super(props)

    const scrollY = new Animated.Value(0)
    const offset = new Animated.Value(0)

    this.state = {
      scrollY,                      /* Current scrollY position */
      offset,                       /* Used to offset the header */
      clamped: Animated.diffClamp(
        Animated.add(
          scrollY.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolateLeft: 'clamp' }),
          offset
        ),
        props.headerMinHeight,
        props.headerMaxHeight
      )                            /* Used to animate the header */
    }
  }

  clampedScrollValue = 0
  offsetValue = 0
  scrollValue = 0

  componentWillMount () {
    const { headerMinHeight, headerMaxHeight } = this.props
    /* Use diffClamp manually because the method does not support adding listeners to it */
    this.state.scrollY.addListener(({ value }) => {
      /* Calculate the difference between current and last */
      const diff = value - this.scrollValue
      this.scrollValue = value
      /* Clamp the value within bounds */
      this.clampedScrollValue = Math.min(Math.max(this.clampedScrollValue + diff, headerMinHeight), headerMaxHeight)
    })
    this.state.offset.addListener(({ value }) => { this.offsetValue = value })
  }

  componentWillUnmount () {
    this.state.scrollY.removeAllListeners()
    this.state.offset.removeAllListeners()
  }

  /* Set timer that calls a function after scroll has finished */
  onScrollEndDrag = () => { this.scrollEndTimer = setTimeout(this.onMomentumScrollEnd, 250) }
  /* Scroll has started, clear timer */
  onMomentumScrollBegin = () => clearTimeout(this.scrollEndTimer)
  /* Handle animation after scroll ends */
  onMomentumScrollEnd = () => {
    const { headerMaxHeight } = this.props
    let toValue = 0
    /* Check if scroll has passed half of the header height */
    if (this.scrollValue > headerMaxHeight && this.clampedScrollValue > (headerMaxHeight / 2)) {
      toValue = this.offsetValue + headerMaxHeight
    } else {
      toValue = this.offsetValue - headerMaxHeight
    }

    Animated.timing(this.state.offset, { toValue, duration: 350, useNativeDriver: true }).start()
  }

  render () {
    const { clamped, scrollY } = this.state
    const { headerMinHeight, headerMaxHeight } = this.props
    const translateY = clamped.interpolate({
      inputRange: [headerMinHeight, headerMaxHeight],
      outputRange: [headerMinHeight, -headerMaxHeight],
      extrapolate: 'clamp'
    })

    const contentContainerStyle = { paddingTop: Platform.OS === 'android' ? headerMaxHeight : 0 }
    const contentOffset = { x: 0, y: -headerMaxHeight }
    const contentInset = { top: headerMaxHeight }

    return (
      <View>
        <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
          { this.props.header }
        </Animated.View>
        <AnimatedFlatList
          scrollEventThrottle={1}
          contentContainerStyle={contentContainerStyle}
          progressViewOffset={headerMaxHeight}
          contentOffset={contentOffset}
          contentInset={contentInset}
          onMomentumScrollBegin={this.onMomentumScrollBegin}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          onScrollEndDrag={this.onScrollEndDrag}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          {...this.props}
        />
      </View>
    )
  }
}
