import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button, ModalContainer } from '../../../Components'
import Header from '../Components/Header'
import styles from './Styles/ModalScreenStyles'

export default class ModalScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  toggleModal = () => this.setState({modalVisible: !this.state.modalVisible})

  renderModalContent = () => (
    <View>
      <Text style={styles.modalTitle}>Example Modal</Text>
      <Text style={styles.modalText}>This is an example modal. Tap any button to close this.</Text>
      <View style={styles.buttons}>
        <Button
          onPress={this.toggleModal}
          text={'Cancel'}
          secondary
          width={'45%'}
        />
        <Button
          onPress={this.toggleModal}
          text={'OK'}
          width={'45%'}
        />
      </View>
    </View>
  )

  render () {
    const {modalVisible} = this.state

    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={this.toggleModal}
          text={'Open Modal'}
        />

        <ModalContainer
          visible={modalVisible}
          onRequestClose={this.toggleModal}
          padding={16}
        >
          {this.renderModalContent()}
        </ModalContainer>
      </ScrollView>
    )
  }
}
