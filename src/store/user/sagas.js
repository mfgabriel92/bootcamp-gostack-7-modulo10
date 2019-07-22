import { call, put, all, takeLatest } from 'redux-saga/effects'
import { Alert } from 'react-native'
import { updateUserSuccess, updateUserFailure } from './actions'
import api from '../../services/api'
import types from './types'

export function* updateUser({ payload }) {
  const { name, email, ...rest } = payload.data
  const me = Object.assign({ name, email }, rest.oldPassword ? rest : {})
  console.tron.log(me)
  try {
    const response = yield call(api.put, 'users', me)
    Alert.alert('Success', 'Profile successfully updated')
    yield put(updateUserSuccess(response.data.user))
  } catch (e) {
    Alert.alert('Error', 'Failed to update')
    yield put(updateUserFailure())
  }
}

export default all([takeLatest(types.UPDATE_USER, updateUser)])
