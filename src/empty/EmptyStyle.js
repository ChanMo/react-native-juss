import { StyleSheet } from 'react-native'
import colors from '../config/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 60,
    color: '#D98B3A',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    color: colors.label,
  }
})
