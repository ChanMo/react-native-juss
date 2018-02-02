import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import ListItem from './ListItem'

storiesOf('ListItem')
  .add('Default', ()=>(
    <View style={{flex:1,padding:10,backgroundColor:'#F6F7F2'}}>
      <ListItem name='关于' />
      <ListItem name='帮助' />
      <ListItem name='设置' />
    </View>
  ))
