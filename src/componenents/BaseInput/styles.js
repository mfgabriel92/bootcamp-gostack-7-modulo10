import styled from 'styled-components/native'

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.07);
  padding: 0 20px;
  height: 52px;
  flex-direction: row;
  align-items: center;
`

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#FFF',
})`
  flex: 1;
  border: 0;
  color: #fff;
  margin-left: 10px;
`
