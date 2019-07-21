import './config/reactotron'
import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#62b0cc" />
      <Routes />
    </>
  )
}

export default App
