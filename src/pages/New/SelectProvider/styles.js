import styled from 'styled-components/native'

export const Container = styled.View``

export const Providers = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`

export const Provider = styled.TouchableOpacity`
  background: #fff;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
`
