import styled from 'styled-components/native'
import BaseInput from '../../componenents/BaseInput'
import BaseButton from '../../componenents/BaseButton'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`

export const TextInput = styled(BaseInput)`
  margin-top: 15px;
`

export const SubmitButton = styled(BaseButton).attrs(props => ({
  disabled: props.isLoading,
}))``

export const Form = styled.View``

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin-top: 15px;
`
