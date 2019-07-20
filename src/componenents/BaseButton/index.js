import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native'
import { Container, Text } from './styles'

function BaseButton({ children, isLoading, ...rest }) {
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

BaseButton.propTypes = {
  isLoading: PropTypes.bool,
}

BaseButton.defaultProps = {
  isLoading: false,
}

export default BaseButton
