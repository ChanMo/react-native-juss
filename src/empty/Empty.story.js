import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Empty from './Empty'

storiesOf('Empty')
  .add('Empty', ()=>(
    <Empty title='空' />
  ))

