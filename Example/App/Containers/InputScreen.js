import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Input, NumericInput } from '../../../Components'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles/InputScreenStyles'

export default class InputScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      basicInputValue: '',
      multilineInputValue: '',
      iconInputValue: '',
      numericValue: 10
    }
  }

  onBasicChangeText = (basicInputValue) => this.setState({ basicInputValue })
  onMultilineChangeText = (multilineInputValue) => this.setState({ multilineInputValue })
  onIconChangeText = (iconInputValue) => this.setState({ iconInputValue })
  setNumericValue = (value) => this.setState({ numericValue: value })

  render () {
    return (
      <ScrollView style={styles.container}>
        <Input
          value={this.state.basicInputValue}
          onChangeText={this.onBasicChangeText}
          placeholder='Basic input'
          marginVertical={10}
        />
        <Input
          value={this.state.iconInputValue}
          onChangeText={this.onIconChangeText}
          placeholder='Icon input'
          marginVertical={10}
          paddingLeft={45}
          leftContent={<Icon name='md-checkmark' size={24} color='green' style={styles.leftIcon} pointerEvents='none' />}
        />
        <Input
          value={this.state.multilineInputValue}
          onChangeText={this.onMultilineChangeText}
          placeholder='Multiline input'
          marginVertical={10}
          paddingTop={10}
          paddingBottom={10}
          paddingHorizontal={15}
          height={100}
          textAlignVertical='top'
          multiline
        />

        <NumericInput
          value={this.state.numericValue}
          onValueChange={this.setNumericValue}
          step={1}
          min={-100}
          max={100}
          marginVertical={10}
        />
      </ScrollView>
    )
  }
}
