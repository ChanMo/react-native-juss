import React, { Component } from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
  },
  item: {
    flexDirection: 'row'
  }
})

export default class List extends Component {
  static propTypes = {
    //data: PropTypes.array.isRequired
  }

  render() {
    return (
      <FlatList 
        renderItems={({item}) => (
          <TouchableOpacity>
            <Text>{item.name}</Text>
            <Text>></Text>
          </TouchableOpacity>
        )}
        {...this.props}
      />
    )
  }
}
