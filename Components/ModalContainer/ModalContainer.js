import React, { PureComponent } from 'react'
import { View, Modal } from 'react-native'
import { Colors } from '../../Themes'
import styles from './Styles'

export default class ModalContainer extends PureComponent {
  getCustomModalStyle = () => {
    const { width, height, borderRadius, borderWidth, borderColor, backgroundColor, padding } = this.props
    const customStyles = {
      ...(width ? {width} : {}),
      ...(height ? {height} : {}),
      ...(borderRadius ? {borderRadius} : {}),
      ...(borderWidth ? {borderWidth} : {}),
      ...(borderColor ? {borderColor} : {}),
      ...(backgroundColor ? {backgroundColor} : {}),
      ...(padding ? {padding} : {})
    }
    return customStyles
  }

  render () {
    const { visible, overlayColor, onRequestClose, style } = this.props

    const modalBgColor = overlayColor || Colors.overlayBg
    const modalStyle = style || styles.modal
    const customModalStyle = this.getCustomModalStyle()

    return (
      <Modal
        animationType='fade'
        visible={visible}
        onRequestClose={onRequestClose}
        transparent
      >
        <View style={[styles.modalOuterContainer, {backgroundColor: modalBgColor}]}>
          <View style={[modalStyle, customModalStyle]}>
            {this.props.children}
          </View>
        </View>
      </Modal>
    )
  }
}
