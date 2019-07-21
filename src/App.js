import React from 'react'
import { useSelector } from 'react-redux'
import createRouter from './routes'

function App() {
  const isSigned = useSelector(state => state.auth.isSigned)
  const Routes = createRouter(isSigned)

  return <Routes />
}

export default App
