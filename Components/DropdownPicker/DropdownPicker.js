import React, { PureComponent } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../../Themes'
import styles from './Styles'

export default class DropdownPicker extends PureComponent {
  keyExtractor = (item, index) => index.toString()

  renderItem = ({item, index}) => {
    const style = { alignSelf: 'center', justifyContent: 'center', alignItems: 'center', height: 45, width: '80%' }
    const textStyle = { fontSize: 18, color: Colors.violet }
    return (
      <TouchableOpacity style={style} onPress={() => this.props.onItemPress(item)}>
        <Text style={textStyle}>Hello world {++index}</Text>
      </TouchableOpacity>
    )
  }

  renderSeparator = () => this.props.separatorComponent || null

  renderItems = () => {
    if (this.props.visible) {
      const style = {
        alignSelf: 'center',
        width: '80%',
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: Colors.violet,
        height: 230
      }
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
