import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Input } from '../../../Components'
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
      iconInputValue: ''
    }
  }

  onBasicChangeText = (basicInputValue) => this.setState({ basicInputValue })
  onMultilineChangeText = (multilineInputValue) => this.setState({ multilineInputValue })
  onIconChangeText = (iconInputValue) => this.setState({ iconInputValue })

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
          leftContent={<Icon name='md-checkmark' size={24} color='green' style={styles.leftIcon} />}
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
      </ScrollView>
    )
  }
}
