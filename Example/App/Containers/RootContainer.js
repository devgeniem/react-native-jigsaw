import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
  }

  renderStatusBar = () => {
    if (Platform.OS === 'android') return <StatusBar barStyle='light-content' />
    else {
      return (
        <View style={styles.statusBar}>
          <StatusBar barStyle='light-content' />
        </View>
      )
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        { this.renderStatusBar() }
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
