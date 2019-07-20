import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, TextInput } from './styles'

function Input({ style, icon, isPassword, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.7)" />}
      <TextInput ref={ref} secureTextEntry={isPassword} {...rest} />
    </Container>
  )
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
  isPassword: PropTypes.bool,
}

Input.defaultProps = {
  style: {},
  icon: null,
  isPassword: false,
}

export default forwardRef(Input)
