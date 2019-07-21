import './config/reactotron'
import React from 'react'
import { StatusBar } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { COLOR_1 } from 'react-native-dotenv'
import { store, persistor } from './store'
import App from './App'

function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor={COLOR_1} />
        <App />
      </PersistGate>
    </Provider>
  )
}

export default Index
