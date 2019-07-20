import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, TextInput } from './styles'

function BaseInput({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.7)" />}
      <TextInput ref={ref} {...rest} />
    </Container>
  )
}

BaseInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
}

BaseInput.defaultProps = {
  style: {},
  icon: null,
}

export default forwardRef(BaseInput)
