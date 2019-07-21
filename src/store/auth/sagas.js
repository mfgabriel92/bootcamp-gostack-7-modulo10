import { call, put, all, takeLatest } from 'redux-saga/effects'
import { Alert } from 'react-native'
import api from '../../services/api'
import { signInSuccess, failure } from './actions'
import types from './types'

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function* signIn({ payload: { email, password } }) {
  try {
    const { data } = yield call(api.post, 'auth', {
      email,
      password,
    })

    if (data.user.provider) {
      Alert.alert('Error', 'User cannot be a provider')
      return
    }

    const { token, user } = data
    yield put(signInSuccess(token, user))

    api.defaults.headers.Authorization = `Bearer ${token}`
  } catch (e) {
    Alert.alert('Error', 'Failed to sign-in')
    yield put(failure())
  }
}

export function* signUp({ payload: { name, email, password } }) {
  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    })
  } catch (e) {
    Alert.alert('Error', 'Failed to sign-up')
    yield put(failure())
  }
}

export function logoff() {}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(types.SIGN_IN, signIn),
  takeLatest(types.SIGN_UP, signUp),
  takeLatest(types.LOGOFF, logoff),
])
