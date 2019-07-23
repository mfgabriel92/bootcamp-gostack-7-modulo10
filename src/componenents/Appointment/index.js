import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { parseISO, formatRelative } from 'date-fns'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Left, Avatar, Info, Name, Time } from './styles'

function Appointment({ data, onCancel }) {
  const time = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      addSuffix: true,
    })
  }, [data.date])

  console.tron.log(data.cancelable)

  return (
    <Container isPast={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{time}</Time>
        </Info>
      </Left>
      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={23} color="#fc4675" />
        </TouchableOpacity>
      )}
    </Container>
  )
}

Appointment.propTypes = {
  data: PropTypes.shape().isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default Appointment
