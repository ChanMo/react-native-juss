import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
//import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './EmptyStyle'

export default class Empty extends Component {
  // Prop type warnings
  static propTypes = {
    title: PropTypes.string,
  }
  
  // Defaults for props
  static defaultProps = {
    title: '这里什么也没有',
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}
