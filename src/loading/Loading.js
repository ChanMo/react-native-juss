import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import colors from '../config/colors'

export default class Loading extends Component {

  render () {
    return (
      <ActivityIndicator color={colors.primary} />
    )
  }
}
