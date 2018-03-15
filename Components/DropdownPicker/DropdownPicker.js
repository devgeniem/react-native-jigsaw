import React, { PureComponent } from 'react'
import { FlatList, View, Text, TouchableOpacity, Animated, Easing } from 'react-native'
import styles from './Styles'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export default class DropdownPicker extends PureComponent {
  constructor (props) {
    super(props)
    const animatedValueInit = props.visible ? 1 : 0
    this.animatedValue = new Animated.Value(animatedValueInit)
  }

  componentWillReceiveProps (nextProps) {
    /* Start animation when component receives next props. */
    const nextVal = nextProps.visible ? 1 : 0
    const duration = nextProps.animationDuration != null ? nextProps.animationDuration : 100

    Animated.timing(
      this.animatedValue,
      {
        toValue: nextVal,
        duration,
        easing: Easing.inOut(Easing.quad)
      }
    ).start()
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({item, index}) => {
    const { itemStyle, labelStyle, onValueChange } = this.props

    const style = itemStyle || styles.itemStyle
    const textStyle = labelStyle || styles.labelStyle

    return (
      <TouchableOpacity style={style} onPress={() => onValueChange(item.value)}>
        <Text style={textStyle}>{item.label}</Text>
      </TouchableOpacity>
    )
  }

  renderSeparator = () => {
    return this.props.separatorComponent || <View style={styles.separator} />
  }

  renderItems = () => {
    const { visible, listStyle, items } = this.props
    if (visible) {
      const style = listStyle || styles.listStyle
      const dropdownHeight = this.props.dropdownHeight || 208

      /* Use animated height and opacity changes */
      const height = this.animatedValue.interpolate({
        inputRange: [0, 0.75],
        outputRange: [0, dropdownHeight] // Use 'auto' as final value to enable container expanding
      })
      const opacity = this.animatedValue.interpolate({
        inputRange: [0, 0.000001],
        outputRange: [0, 1]
      })

      return (
        <AnimatedFlatList
          style={[style, {height, opacity}]}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          showsVerticalScrollIndicator={false}
          data={items}
          {...this.props}
        />
      )
    }
  }

  render () {
    return (
      <View>
        { this.props.component }
        { this.renderItems() }
      </View>
    )
  }
}
