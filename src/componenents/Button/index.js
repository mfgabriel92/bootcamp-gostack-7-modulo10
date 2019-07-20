import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native'
import { Container, Text } from './styles'

function Button({ children, isLoading, ...rest }) {
  return (
    <Container {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  )
}

Button.propTypes = {
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  isLoading: false,
}

export default Button
