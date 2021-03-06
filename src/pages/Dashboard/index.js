import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Dashboard from './Dashboard'

export default {
  screen: Dashboard,
  navigationOptions: () => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon name="dashboard" size={24} color={tintColor} />
    ),
  }),
}
