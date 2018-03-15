import React, { PureComponent } from 'react'
import { FlatList, View, Text, TouchableOpacity, Animated, Easing } from 'react-native'
import { Colors } from '../../Themes'
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
    const style = { alignSelf: 'center', justifyContent: 'center', alignItems: 'center', height: 45, width: '80%', backgroundColor: Colors.transparent }
    const textStyle = { fontSize: 18, color: Colors.violet }
    return (
      <TouchableOpacity style={style} onPress={() => this.props.onItemPress(item)}>
        <Text style={textStyle}>Hello world {++index}</Text>
      </TouchableOpacity>
    )
  }

  renderSeparator = () => this.props.separatorComponent || null

  renderItems = () => {
    const dropdownHeight = this.props.dropdownHeight || 208

    const style = {
      alignSelf: 'center',
      width: '80%',
      borderWidth: 2,
      borderTopWidth: 0,
      borderColor: Colors.violet
    }

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
        {...this.props}
      />
    )
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
