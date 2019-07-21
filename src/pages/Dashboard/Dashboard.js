import React from 'react'
import Background from '../../componenents/Background'
import { Container, Title, Appointments } from './styles'
import Appointment from '../../componenents/Appointment'

function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Schedules</Title>

        <Appointments
          data={[1, 2, 3, 4, 5]}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  )
}

export default Dashboard
