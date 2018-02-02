import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Button from './Button'

storiesOf('Button')
  .add('Primary', () => (
    <View style={{flex:1,padding:10,backgroundColor:'#F6F7F2'}}>
      <Button title='Primary Button' />
    </View>
  ))
  .add('Secondary', ()=>(
    <View style={{flex:1,padding:10,backgroundColor:'#F6F7F2'}}>
      <Button secondary title='Secondary Button' />
    </View>
  ))
  .add('Default', () => (
    <View style={{flex:1,padding:10,backgroundColor:'#F6F7F2'}}>
      <Button default title='Default Button' />
    </View>
  ))
  .add('Danger', ()=>(
    <View style={{flex:1,padding:10,backgroundColor:'#F6F7F2'}}>
      <Button danger title='Danger Button' />
    </View>
  ))
  .add('Small', ()=>(
    <View style={{flex:1,padding:10,backgroundColor:'#F6F7F2'}}>
      <Button small title='Small Button' />
    </View>
  ))
