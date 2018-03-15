import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { CollapseContainer, Button } from '../../../Components'
import Header from '../Components/Header'
import styles from './Styles/CollapseScreenStyles'

export default class CollapseScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      visibleA: false,
      visibleB: false
    }
  }

  toggleA = () => this.setState({visibleA: !this.state.visibleA})
  toggleB = () => this.setState({visibleB: !this.state.visibleB})

  renderExampleContent = () => (
    <View>
      <Text style={styles.heading}>Example</Text>
      <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisi sed dolor tincidunt rutrum. Nam rhoncus mattis scelerisque. Proin mattis enim interdum faucibus rutrum. Cras sagittis mauris pretium, fringilla purus in, tincidunt est.</Text>
      <Text style={styles.heading}>More content</Text>
      <Text style={styles.content}>In sodales at mauris ultricies posuere. Mauris malesuada ultrices augue, ut faucibus diam sagittis nec. Cras tincidunt interdum condimentum. Sed pretium fringilla ultrices. Quisque efficitur est sed sapien suscipit, ac lobortis sem tincidunt. Mauris eu dui viverra, congue tellus eget, pulvinar enim. In vel convallis enim, eget pulvinar urna.</Text>
    </View>
  )

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.innerContainer}>
        <Text style={styles.title}>CollapseContainer</Text>
        <Button onPress={this.toggleA} width={'100%'} text='Click to toggle' />
        <CollapseContainer visible={this.state.visibleA} style={styles.contentContainer}>
          {this.renderExampleContent()}
        </CollapseContainer>
        <View style={styles.spacer} />
        <Button onPress={this.toggleB} width={'100%'} text='With fast animation' />
        <CollapseContainer visible={this.state.visibleB} animationDuration={100} style={styles.contentContainer}>
          {this.renderExampleContent()}
        </CollapseContainer>
      </ScrollView>
    )
  }
}
