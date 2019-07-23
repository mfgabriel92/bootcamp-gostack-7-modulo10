import styled from 'styled-components/native'
import BaseButton from '../../../componenents/BaseButton'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Avatar = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 45px;
  margin-bottom: 10px;
`

export const Name = styled.Text`
  font-size: 22px;
  color: #fff;
`

export const Time = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4)
  margin-top: 7px;
`

export const ConfirmButton = styled(BaseButton)``
