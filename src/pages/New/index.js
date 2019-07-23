import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SelectProvider from './SelectProvider'
import SelectDateTime from './SelectDateTime'
import Confirm from './Confirm'

export default {
  screen: createStackNavigator(
    {
      SelectProvider,
      SelectDateTime,
      Confirm,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          margin: 20,
        },
      },
    }
  ),
  navigationOptions: () => ({
    tabBarVisible: false,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="plus-circle" size={24} color={tintColor} />
    ),
  }),
}
