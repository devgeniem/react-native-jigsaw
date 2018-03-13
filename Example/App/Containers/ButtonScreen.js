import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Button } from '../../../Components'
import styles from './Styles/LaunchScreenStyles'

export default class ButtonScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Button />
      </ScrollView>
    )
  }
}
