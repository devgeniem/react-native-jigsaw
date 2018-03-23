import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/LinkStyles'

export default class Link extends PureComponent {
  navigate = () => this.props.navigate(this.props.to)

  render () {
    const { text } = this.props
    return (
      <TouchableOpacity onPress={this.navigate}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    )
  }
}
