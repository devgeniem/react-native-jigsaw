import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.title}>React Native Jigsaw Example</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
