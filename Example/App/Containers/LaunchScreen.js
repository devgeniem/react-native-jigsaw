import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  static navigationOptions = {
    header: null
  }

  toButton = () => this.props.navigation.navigate('ButtonScreen')
  toCheckBox = () => this.props.navigation.navigate('CheckBoxScreen')
  toTextInput = () => this.props.navigation.navigate('InputScreen')

  render () {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={this.toButton}>
          <Text style={styles.link}>Button</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toCheckBox}>
          <Text style={styles.link}>CheckBox &amp; RadioButton</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toTextInput}>
          <Text style={styles.link}>Input</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
