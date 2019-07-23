import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import Background from '../../../componenents/Background'
import DateInput from '../../../componenents/DateInput'
import { Container, Hours, Hour, Title } from './styles'

function SelectDateTime({ navigation }) {
  const provider = navigation.getParam('provider')
  const [date, setDate] = useState(new Date())
  const [hours, setHours] = useState([])

  useEffect(() => {
    async function loadHours() {
      const { data } = await api.get(`/providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      })

      setHours(data.available)
    }

    loadHours()
  }, [date, provider.id])

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    })
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <Hours
          data={hours}
          keyExtractor={item => item.hour}
          renderItem={({ item }) => (
            <Hour
              onPress={() => handleSelectHour(item.value)}
              enabled={item.available}
            >
              <Title>{item.hour}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  )
}

export default SelectDateTime
