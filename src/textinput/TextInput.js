import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Platform, View, TextInput as RNTextInput } from 'react-native'
import styles from './TextInputStyle'
import colors from '../config/colors'

export default class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: colors.line,
      //color: '#F24D16',
    }
  }
  // // Prop type warnings
  // static propTypes = {
  //   style: PropTypes.object,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    let style = [styles.input]
    if(Platform.OS === 'ios') {
      style.push(styles.ios)
    } else {
      style.push(styles.android)
    }
    return (
      <View style={style}>
        <RNTextInput
          placeholderTextColor='rgba(255,255,255,0.38)'
          onFocus={()=>this.setState({color:colors.primary})}
          onBlur={()=>this.setState({color:colors.text})}
          underlineColorAndroid={this.state.color}
          selectionColor={this.state.color}
          {...this.props}
        />
      </View>
    )
  }
}
