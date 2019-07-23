import React, { useState, useEffect } from 'react'
import Background from '../../../componenents/Background'
import api from '../../../services/api'
import { Container, Providers, Provider, Avatar, Name } from './styles'

function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    async function loadProviders() {
      const { data } = await api.get('/providers')
      setProviders(data.providers)
    }

    loadProviders()
  }, [])

  return (
    <Background>
      <Container>
        <Providers
          data={providers}
          keyExtrator={provider => String(provider.id)}
          renderItem={({ item }) => (
            <Provider
              onPress={() =>
                navigation.navigate('SelectDateTime', { provider: item })
              }
            >
              <Avatar
                source={{
                  uri: item.avatar
                    ? item.avatar.url
                    : `https://api.adorable.io/avatar/50/${item.name}.png`,
                }}
              />
              <Name>{item.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  )
}

export default SelectProvider
