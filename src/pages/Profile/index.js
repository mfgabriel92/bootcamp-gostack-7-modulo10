import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Profile from './Profile'

export default {
  screen: Profile,
  navigationOptions: () => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" size={24} color={tintColor} />
    ),
  }),
}
