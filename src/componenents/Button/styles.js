import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  height: 52px;
  background-color: #3b9eff;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
