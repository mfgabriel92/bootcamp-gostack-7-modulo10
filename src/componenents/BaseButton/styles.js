import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Button = styled(TouchableOpacity)`
  height: 52px;
  background-color: #3b9eff;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
