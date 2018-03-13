import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Colors } from '../Themes'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles/HeaderStyles'

export default class Header extends React.PureComponent {
  back = () => this.props.goBack()

  render () {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.back} style={styles.icon}>
          <Icon name='ios-arrow-back' size={28} color={Colors.white} />
        </TouchableOpacity>
      </View>
    )
  }
}
