import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Link from '../Components/Link'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  static navigationOptions = {
    header: null
  }

  renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>React Native Jigsaw Example</Text>
    </View>
  )

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        { this.renderHeader() }
        <ScrollView style={styles.contentContainer}>
          <Link text='Button' to='ButtonScreen' navigate={navigate} />
          <Link text='CheckBox &amp; RadioButton' to='CheckBoxScreen' navigate={navigate} />
          <Link text='Input fields' to='InputScreen' navigate={navigate} />
          <Link text='Picker' to='PickerScreen' navigate={navigate} />
          <Link text='DateTimePicker' to='DateTimeScreen' navigate={navigate} />
          <Link text='CollapseContainer' to='CollapseScreen' navigate={navigate} />
          <Link text='ModalContainer' to='ModalScreen' navigate={navigate} />
          <Link text='AutoHideHeaderList' to='AutoHideHeaderListScreen' navigate={navigate} />
          <Link text='DropdownPicker' to='DropdownScreen' navigate={navigate} />
          <Link text='Rating' to='RatingScreen' navigate={navigate} />
        </ScrollView>
      </View>
    )
  }
}
