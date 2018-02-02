import { StyleSheet } from 'react-native'
import colors from '../config/colors'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: colors.snow,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    alignItems: 'center',
    borderRadius: 2,
  },
  danger: {
    backgroundColor: colors.error,
  },
  margin: {
    marginBottom: 10,
  },
  defaultText: {
    color: colors.text,
  },
  default: {
    backgroundColor: '#E7E7E7',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  hollowText: {
    color: colors.primary,
  },
  hollow: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  smallText: {
    fontSize: 14,
  },
  small: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  mediumText: {
    fontSize: 14,
  },
  medium: {
    paddingHorizontal: 20,
  },
  disabled: {
    opacity: 0.3
  }
})
