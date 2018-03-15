import React, { PureComponent } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles'

export default class DropdownPicker extends PureComponent {
  keyExtractor = (item, index) => index.toString()

  renderItem = ({item, index}) => {
    const { itemStyle, labelStyle, label, itemComponent, onItemPress } = this.props

    if (itemComponent) return itemComponent

    const style = itemStyle || styles.itemStyle
    const textStyle = labelStyle || styles.labelStyle
    const text = label || `Item ${++index}`

    return (
      <TouchableOpacity style={style} onPress={() => onItemPress(item)}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    )
  }

  renderSeparator = () => {
    console.log('helloworld')
    return this.props.separatorComponent || <View style={styles.separator} />
  }

  renderItems = () => {
    const { visible, listStyle } = this.props
    if (visible) {
      const style = listStyle || styles.listStyle

      return (
        <FlatList
          style={style}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          showsVerticalScrollIndicator={false}
          {...this.props}
        />
      )
    }
    return null
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
