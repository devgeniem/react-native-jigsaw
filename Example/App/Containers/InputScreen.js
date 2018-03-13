import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { NumericInput } from '../../../Components'
import styles from './Styles/LaunchScreenStyles'

export default class ButtonScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numericValue: 10
    }
  }

  setNumericValue = (value) => this.setState({ numericValue: value })

  render () {
    return (
      <ScrollView style={styles.container}>
        <NumericInput
          value={this.state.numericValue}
          onValueChange={this.setNumericValue}
          step={1}
          min={-20}
          max={20}
        />
      </ScrollView>
    )
  }
}
