import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Hours = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})``

export const Hour = styled.TouchableOpacity.attrs(props => ({
  disabled: !props.enabled,
}))`
  background: #fff;
  padding: 20px;
  flex: 1;
  opacity: ${props => (props.enabled ? 1 : 0.7)};
  align-items: center;
  margin: 0 10px 20px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`
