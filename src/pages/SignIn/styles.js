import styled from 'styled-components/native'
import { Platform, TouchableOpacity } from 'react-native'
import BaseInput from '../../componenents/BaseInput'
import BaseButton from '../../componenents/BaseButton'

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`

export const Logo = styled.Image`
  margin-bottom: 45px;
`

export const TextInput = styled(BaseInput)`
  margin-top: 15px;
`

export const SubmitButton = styled(BaseButton).attrs(props => ({
  disabled: props.isLoading,
}))``

export const SignInLink = styled(TouchableOpacity)`
  background: transparent;
  margin-top: 15px;
`

export const SignInText = styled.Text`
  font-weight: normal;
  font-size: 12px;
  color: #fff;
`
