import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import colors from '../config/colors'

export default class ListItem extends Component {
  static proptypes = {
    name: PropTypes.string,
    style: PropTypes.object,
  }
  render() {
    return (
      <TouchableOpacity 
        style={[styles.container, this.props.styles]} {...this.props}>
        <Text style={styles.title}>{this.props.name}</Text>
        <View style={styles.right}>
          <Text style={styles.rightIcon}>></Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    marginBottom: 2,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.snow
  },
  title: {
    color: colors.text,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightLabel: {
    color: colors.text,
  },
  rightIcon: {
    color: colors.label
  },
})
