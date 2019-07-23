import React, { useState, useMemo } from 'react'
import { DatePickerIOS } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { format } from 'date-fns'
import { Container, DateButton, DateText, Picker } from './styles'

function Date({ date, onChange }) {
  const [opened, setOpened] = useState(false)
  const formattedDate = useMemo(() => {
    format(date, "do 'of' MMMM, YYYY")
  }, [date])

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" size={22} color="#fff" />
        <DateText>{formattedDate}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            mode="date"
          />
        </Picker>
      )}
    </Container>
  )
}

Date.propTypes = {
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Date
