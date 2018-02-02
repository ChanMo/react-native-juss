import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View, Text, Button as RNButton } from 'react-native'
import styles from './ButtonStyle'

export default class Button extends Component {
  // Prop type warnings
  static propTypes = {
    primary: PropTypes.bool, // primary theme
    danger: PropTypes.bool, // danger theme
    default: PropTypes.bool, // default theme
  }

  // Defaults for props
  static defaultProps = {
    primary: true,
    danger: false,
    default: false,
  }

  render () {
    let style = [styles.button]
    let textStyle = [styles.text]
    if (this.props.default) {
      style.push(styles.default)
      textStyle.push(styles.defaultText)
    } else if (this.props.danger) {
      style.push(styles.danger)
    } else if (this.props.secondary) {
      style.push(styles.hollow)
      textStyle.push(styles.hollowText)
    } else if (this.props.hollow) {
      style.push(styles.hollow)
      textStyle.push(styles.hollowText)
    }
    if (this.props.disabled) {
      style.push(styles.disabled)
    }
    if (this.props.small) {
      style.push(styles.small)
      textStyle.push(styles.smallText)
    } else if (this.props.medium) {
      style.push(styles.medium)
      textStyle.push(styles.mediumText)
    }
    if (this.props.style) {
      style.push(this.props.style)
    }
    if (Platform.OS === 'ios') {
      return (
        <TouchableOpacity
          disabled={this.props.disabled}
          onPress={this.props.onPress}>
          <View style={style}>
            <Text style={textStyle}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableNativeFeedback
          disabled={this.props.disabled}
          onPress={this.props.onPress}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={style}>
            <Text style={textStyle}>{this.props.title}</Text>
          </View>
        </TouchableNativeFeedback>
      )
    }
  }
}
