import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  margin: 30px 0;
`

export const Appointments = styled.FlatList.attrs({
  contentContainerStyle: {
    showsVerticalScrollIndicator: false,
  },
})``
