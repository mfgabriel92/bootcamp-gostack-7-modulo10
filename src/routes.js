import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SignIn from './pages/SignIn/config'
import SignUp from './pages/SignUp/config'

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
)
