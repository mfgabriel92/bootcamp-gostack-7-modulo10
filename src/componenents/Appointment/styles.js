import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.isPast ? 0.5 : 1)};
`

export const Left = styled.View`
  align-items: center;
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`

export const Info = styled.View`
  margin-left: 15px;
`

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 5px;
`
