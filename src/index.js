import './config/reactotron'
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ONESIGNAL_APP_ID, COLOR_1 } from 'babel-plugin-dotenv-import'
import CodePush from 'react-native-code-push'
import OneSignal from 'react-native-onesignal'
import { store, persistor } from './store'
import App from './App'

class Index extends Component {
  constructor(props) {
    super(props)

    OneSignal.init(ONESIGNAL_APP_ID)
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('ids', this.onIds)
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('ids', this.onIds)
  }

  onReceived = data => {}
  onOpened = notification => {}
  onIds = id => {}

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor={COLOR_1} />
          <App />
        </PersistGate>
      </Provider>
    )
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index)
