import React, { Component } from 'react'
import { ScrollView, Keyboard } from 'react-native'
import { Input, DateTimePicker } from '../../../Components'
import moment from 'moment'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../Themes'
import styles from './Styles/DateTimeScreenStyles'

export default class DateTimeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header goBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      time: { hour: 12, minute: 0 },
      datePickerVisible: false,
      timePickerVisible: false
    }
  }

  onChangeDate = (date) => this.setState({ date, datePickerVisible: false })
  onChangeTime = (time) => this.setState({ time, timePickerVisible: false })

  openDatePicker = () => {
    Keyboard.dismiss()
    this.setState({ datePickerVisible: true })
  }

  openTimePicker = () => {
    Keyboard.dismiss()
    this.setState({ timePickerVisible: true })
  }

  closePicker = () => this.setState({ datePickerVisible: false, timePickerVisible: false })

  render () {
    const { date, time, datePickerVisible, timePickerVisible } = this.state

    return (
      <ScrollView style={styles.container}>
        <Input
          value={moment(date).format('D.M.YYYY')}
          onFocus={this.openDatePicker}
          placeholder='Choose a date'
          marginVertical={10}
          paddingLeft={45}
          leftContent={<Icon name='ios-calendar-outline' size={24} color={Colors.violet} style={styles.leftIcon} />}
        />
        <DateTimePicker
          type='date'
          value={date}
          onChange={this.onChangeDate}
          visible={datePickerVisible}
          closePicker={this.closePicker}
        />
        <Input
          value={`${('0' + time.hour).slice(-2)}:${('0' + time.minute).slice(-2)}`}
          onFocus={this.openTimePicker}
          placeholder='Choose a time'
          marginVertical={10}
          paddingLeft={45}
          leftContent={<Icon name='ios-alarm-outline' size={24} color={Colors.violet} style={styles.leftIcon} />}
        />
        <DateTimePicker
          type='time'
          value={time}
          onChange={this.onChangeTime}
          visible={timePickerVisible}
          closePicker={this.closePicker}
        />
      </ScrollView>
    )
  }
}
