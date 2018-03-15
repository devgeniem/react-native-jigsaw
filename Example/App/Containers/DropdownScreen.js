import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { Button, DropdownPicker } from '../../../Components'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../Themes'
import styles from './Styles/DropdownScreenStyles'

export default class DropdownScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      selected: 'Choose your favorite beverage',
      visible: false
    }
  }

  renderButton = () => (
    <Button
      text={this.state.selected}
      onPress={this.onPress}
      fontSize={14}
      width='80%'
      rightIcon={<Icon name='ios-arrow-down-outline' size={24} color={Colors.white} style={styles.rightIcon} />}
    />
  )

  onPress = () => this.setState({ visible: !this.state.visible })
  pick = (item) => this.setState({ selected: item.toString(), visible: false })

  render () {
    return (
      <ScrollView style={styles.container}>
        <DropdownPicker
          component={this.renderButton()}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          visible={this.state.visible}
          onItemPress={this.pick}
        />
      </ScrollView>
    )
  }
}
