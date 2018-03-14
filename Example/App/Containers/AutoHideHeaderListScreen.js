import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { AutoHideHeaderList } from '../../../Components'
import Header from '../Components/Header'
import styles from './Styles/AutoHideHeaderListScreenStyles'

const data = [
  { title: 'Item 1' },
  { title: 'Item 2' },
  { title: 'Item 3' },
  { title: 'Item 4' },
  { title: 'Item 5' },
  { title: 'Item 6' },
  { title: 'Item 7' },
  { title: 'Item 8' },
  { title: 'Item 9' },
  { title: 'Item 10' }
]

export default class AutoHideHeaderListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  keyExtractor = (item, index) => index
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )

  header = () => (
    <View style={styles.header}>
      <Text style={styles.title}>On on on</Text>
    </View>
  )

  render () {
    return (
      <View style={styles.container}>
        <AutoHideHeaderList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          headerMinHeight={0}
          headerMaxHeight={150}
          header={this.header()}
        />
      </View>
    )
  }
}
