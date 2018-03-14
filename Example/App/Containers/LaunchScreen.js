import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  static navigationOptions = {
    header: null
  }

  toButton = () => this.props.navigation.navigate('ButtonScreen')
  toCheckBox = () => this.props.navigation.navigate('CheckBoxScreen')
  toDateTime = () => this.props.navigation.navigate('DateTimeScreen')
  toInput = () => this.props.navigation.navigate('InputScreen')
  toCollapse = () => this.props.navigation.navigate('CollapseScreen')

  render () {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={this.toButton}>
          <Text style={styles.link}>Button</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toCheckBox}>
          <Text style={styles.link}>CheckBox &amp; RadioButton</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toInput}>
          <Text style={styles.link}>Input fields</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toCollapse}>
          <Text style={styles.link}>CollapseContainer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toDateTime}>
          <Text style={styles.link}>Native Date & Time Picker</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
