import React, { useState, useEffect } from 'react'
import { withNavigationFocus } from 'react-navigation'
import Background from '../../componenents/Background'
import { Container, Title, Appointments } from './styles'
import Appointment from '../../componenents/Appointment'
import api from '../../services/api'

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    if (isFocused) {
      loadAppointments()
    }
  }, [isFocused])

  async function loadAppointments() {
    const response = await api.get('/appointments')
    setAppointments(response.data.appointments)
  }

  async function handleOnCancel(id) {
    const response = await api.delete(`/appointments/${id}`)

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    )

    loadAppointments()
  }

  return (
    <Background>
      <Container>
        <Title>Appointments</Title>

        <Appointments
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleOnCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  )
}

export default withNavigationFocus(Dashboard)
