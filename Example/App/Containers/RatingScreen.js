import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating } from '../../../Components'
import Header from '../Components/Header'
import styles from './Styles/RatingScreenStyles'

export default class RatingScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      stars: 0,
      hearts: 0
    }
  }

  setStars = (value) => this.setState({ stars: value })
  setHearts = (value) => this.setState({ hearts: value })

  render () {
    const { stars, hearts } = this.state
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Rating
          value={stars}
          count={5}
          onValueChange={this.setStars}
          star={<Icon name='ios-star' size={32} color='#fa0' style={styles.star} />}
          empty={<Icon name='ios-star' size={32} color='#aaa' style={styles.star} />}
        />

        <Rating
          value={hearts}
          count={5}
          onValueChange={this.setHearts}
          star={<Icon name='ios-heart' size={32} color='#f22' style={styles.star} />}
          empty={<Icon name='ios-heart-outline' size={32} color='#aaa' style={styles.star} />}
        />
      </ScrollView>
    )
  }
}
