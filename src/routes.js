import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SignIn from './Pages/SignIn/config'
import SignUp from './Pages/SignUp/config'

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
)
