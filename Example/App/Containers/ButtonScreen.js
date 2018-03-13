import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Button } from '../../../Components'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles/ButtonScreenStyles'

export default class ButtonScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  onPress = () => console.log('on on on')

  render () {
    return (
      <ScrollView style={styles.container}>
        <Button
          text='Primary Button'
          onPress={this.onPress}
          margin={10}
        />
        <Button
          text='Icon Button'
          onPress={this.onPress}
          margin={10}
          textPadding={10}
          leftIcon={<Icon name='md-checkmark' size={24} color='green' />}
        />
        <Button
          text='Loading Button'
          margin={10}
          loading
        />
        <Button
          text='Disabled Button'
          margin={10}
          disabled
        />
        <Button
          text='Secondary Button'
          onPress={this.onPress}
          margin={10}
          secondary
        />
        <Button
          text='Loading Button'
          margin={10}
          loading
          secondary
        />
        <Button
          text='Disabled Button'
          margin={10}
          disabled
          secondary
        />
      </ScrollView>
    )
  }
}
