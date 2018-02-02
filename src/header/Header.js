import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors'

const styles = StyleSheet.create({
  container: {
    height: 70,
    padding: 15,
    backgroundColor: colors.primary
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.snow,
  },
  label: {
    color: 'rgba(255,255,255,0.87)'
  }
})

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    leftComponent: PropTypes.object,
    rightComponent: PropTypes.object,
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.innerContainer}>
          <TouchableOpacity 
            style={styles.left}
            onPress={()=>null}>
            <Text>主页</Text>
          </TouchableOpacity>
          <View style={styles.center}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <TouchableOpacity
            style={styles.right}
            onPress={()=>null}>
            <Text>更多</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
