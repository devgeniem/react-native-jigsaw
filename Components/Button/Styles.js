import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.violet,
    height: 50,
    width: '66%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  secondaryButton: {
    backgroundColor: Colors.white,
    height: 50,
    width: '66%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: Colors.violet
  },
  primaryText: {
    color: Colors.white,
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  secondaryText: {
    color: Colors.violet,
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  disabled: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? -15 : 0,
    backgroundColor: Colors.disabled,
    width: '100%',
    height: '100%'
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
