import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  static navigationOptions = {
    header: null
  }

  toButton = () => this.props.navigation.navigate('ButtonScreen')
  toCheckBox = () => this.props.navigation.navigate('CheckBoxScreen')
  toDateTime = () => this.props.navigation.navigate('DateTimeScreen')
  toInput = () => this.props.navigation.navigate('InputScreen')
  toPicker = () => this.props.navigation.navigate('PickerScreen')
  toCollapse = () => this.props.navigation.navigate('CollapseScreen')
  toModal = () => this.props.navigation.navigate('ModalScreen')
  toAutoHide = () => this.props.navigation.navigate('AutoHideHeaderListScreen')
  toDropdown = () => this.props.navigation.navigate('DropdownScreen')
  toRating = () => this.props.navigation.navigate('RatingScreen')

  renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>React Native Jigsaw Example</Text>
    </View>
  )

  render () {
    return (
      <View style={styles.container}>
        { this.renderHeader() }
        <ScrollView style={styles.contentContainer}>
          <TouchableOpacity onPress={this.toButton}>
            <Text style={styles.link}>Button</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toCheckBox}>
            <Text style={styles.link}>CheckBox &amp; RadioButton</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toInput}>
            <Text style={styles.link}>Input fields</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toPicker}>
            <Text style={styles.link}>Picker</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toDateTime}>
            <Text style={styles.link}>DateTimePicker</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toCollapse}>
            <Text style={styles.link}>CollapseContainer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toModal}>
            <Text style={styles.link}>ModalContainer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toAutoHide}>
            <Text style={styles.link}>AutoHideHeaderList</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toDropdown}>
            <Text style={styles.link}>DropdownPicker</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toRating}>
            <Text style={styles.link}>Rating</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}
