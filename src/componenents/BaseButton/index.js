import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native'
import { Button, Text } from './styles'

function BaseButton({ children, isLoading, ...rest }) {
  return (
    <Button disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Button>
  )
}

BaseButton.propTypes = {
  isLoading: PropTypes.bool,
}

BaseButton.defaultProps = {
  isLoading: false,
}

export default BaseButton
