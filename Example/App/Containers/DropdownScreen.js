import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, DropdownPicker } from '../../../Components'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../Themes'
import styles from './Styles/DropdownScreenStyles'

const ITEMS = [
  { value: 0, label: 'Option 1' },
  { value: 1, label: 'Option 2' },
  { value: 2, label: 'Option 3' },
  { value: 3, label: 'Option 4' },
  { value: 4, label: 'Option 5' },
  { value: 5, label: 'Option 6' },
  { value: 6, label: 'Option 7' },
  { value: 7, label: 'Option 8' },
  { value: 8, label: 'Option 9' },
  { value: 9, label: 'Option 10' },
  { value: 10, label: 'Option 11' },
  { value: 11, label: 'Option 12' },
  { value: 12, label: 'Option 13' },
  { value: 13, label: 'Option 14' },
  { value: 14, label: 'Option 15' },
  { value: 15, label: 'Option 16' }
]

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
      margin={10}
      width='80%'
      rightIcon={<Icon name='ios-arrow-down-outline' size={24} color={Colors.white} style={styles.rightIcon} />}
    />
  )

  renderSeparator = () => <View style={styles.separator} />

  onPress = () => this.setState({ visible: !this.state.visible })
  pick = (value) => this.setState({ selected: ITEMS[value].label, visible: false })

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} bounces={false}>
        <DropdownPicker
          component={this.renderButton()}
          items={ITEMS}
          visible={this.state.visible}
          onValueChange={this.pick}
          separatorComponent={this.renderSeparator()}
        />
        { this.renderButton() }
      </ScrollView>
    )
  }
}
