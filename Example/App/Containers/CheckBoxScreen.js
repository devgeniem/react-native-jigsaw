import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { CheckBox, RadioButton } from '../../../Components'
import Header from '../Components/Header'
import styles from './Styles/CheckBoxScreenStyles'

const RADIO_BUTTON_OPTIONS = ['A', 'B', 'C', 'D']

export default class CheckBoxScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      check1: true,
      check2: false,
      check3: false,
      check4: false,

      radioButtonIndex: null
    }
  }

  toggleCheck1 = () => this.setState({ check1: !this.state.check1 })
  toggleCheck2 = () => this.setState({ check2: !this.state.check2 })
  toggleCheck3 = () => this.setState({ check3: !this.state.check3 })
  toggleCheck4 = () => this.setState({ check4: !this.state.check4 })

  setRadioButtonIndex = (index) => this.setState({ radioButtonIndex: index })

  renderCustomCheck = () => {
    return <View style={styles.customCheck} />
  }

  renderCheckBoxes = () => {
    return (
      <View>
        <View style={styles.row}>
          <CheckBox
            checked={this.state.check1}
            onPress={this.toggleCheck1}
          />
          <Text style={styles.label}>Default</Text>
        </View>

        <View style={styles.row}>
          <CheckBox
            checked={this.state.check3}
            onPress={this.toggleCheck3}
            invert
          />
          <Text style={styles.label}>Invert</Text>
        </View>

        <View style={styles.row}>
          <CheckBox
            checked={this.state.check2}
            onPress={this.toggleCheck2}
            color='#00f'
            renderCheck={this.renderCustomCheck}
          />
          <Text style={styles.label}>Custom check</Text>
        </View>

        <View style={styles.row}>
          <CheckBox
            checked={this.state.check4}
            onPress={this.toggleCheck4}
            color='#cc4400'
            size={48}
          />
          <Text style={styles.label}>Custom size</Text>
        </View>
      </View>
    )
  }

  renderRadioButtons = () => {
    return RADIO_BUTTON_OPTIONS.map((value, index) => (
      <View key={index} style={styles.row}>
        <RadioButton
          checked={this.state.radioButtonIndex === index}
          onPress={() => this.setRadioButtonIndex(index)}
        />
        <Text style={styles.label}>{value}</Text>
      </View>
    ))
  }

  render () {
    return (
      <ScrollView style={styles.container}>

        <Text style={styles.title}>CheckBox</Text>
        {this.renderCheckBoxes()}

        <Text style={styles.title}>RadioButton</Text>
        {this.renderRadioButtons()}
      </ScrollView>
    )
  }
}
