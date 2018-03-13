import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { TextInput } from '../../../Components'
import Header from '../Components/Header'
import styles from './Styles/ButtonScreenStyles'

export default class TextInputScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  render () {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    )
  }
}
