import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Left, Avatar, Info, Name, Time } from './styles'

function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
        />
        <Info>
          <Name>Gabriel Fernandes</Name>
          <Time>In 3 hours</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={23} color="#fc4675" />
      </TouchableOpacity>
    </Container>
  )
}

export default Appointment
