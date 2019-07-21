import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'
import { IP } from 'react-native-dotenv'

if (__DEV__) {
  const tron = Reactotron.configure({
    host: `${IP}`,
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect()

  tron.clear()

  console.tron = tron
}
