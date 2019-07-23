import React, { useMemo } from 'react'
import { parseISO, formatRelative } from 'date-fns'
import api from '../../../services/api'
import Background from '../../../componenents/Background'
import { Container, Avatar, Name, Time, ConfirmButton } from './styles'

function Confirm({ navigation }) {
  const provider = navigation.getParam('provider')
  const time = navigation.getParam('time')

  const formattedDate = useMemo(
    () => formatRelative(parseISO(time), new Date()),
    [time]
  )

  async function handleConfirm() {
    await api.post('/appointments', {
      provider_id: provider.id,
      date: time,
    })

    navigation.navigate('Dashboard')
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/90/${provider.name}.png`,
          }}
        />

        <Name>{provider.name}</Name>
        <Time>{formattedDate}</Time>
        <ConfirmButton onPress={handleConfirm}>Confirm!</ConfirmButton>
      </Container>
    </Background>
  )
}

export default Confirm
