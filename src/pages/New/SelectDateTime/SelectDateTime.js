import React, { useState } from 'react'
import Background from '../../../componenents/Background'
import DateInput from '../../../componenents/DateInput'
import { Container } from './styles'

function SelectDateTime() {
  const [date, setDate] = useState(new Date())

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  )
}

export default SelectDateTime
