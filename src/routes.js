import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import { darken } from 'polished'
import { COLOR_2 } from 'babel-plugin-dotenv-import'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import New from './pages/New'
import Profile from './pages/Profile'

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            New,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              showLabel: false,
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
              style: {
                backgroundColor: darken(0.2, COLOR_2),
              },
            },
          }
        ),
      },
      {
        initialRouteName: !isSigned ? 'Auth' : 'App',
      }
    )
  )
