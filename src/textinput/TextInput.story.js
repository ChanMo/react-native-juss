import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import TextInput from './TextInput'

storiesOf('TextInput')
  .add('Default', ()=>(
    <View style={{flex:1,padding:10,backgroundColor:'#F6F7F2'}}>
      <TextInput placeholder='Input Something' />
    </View>
  ))
