import React from 'react'
import { Container } from './styles'
import Background from '../../componenents/Background'
import Input from '../../componenents/Input'
import Button from '../../componenents/Button'

function SignIn() {
  return (
    <Background>
      <Container>
        <Input icon="email" placeholder="Your e-mail" />
        <Input icon="lock" placeholder="Your password" isPassword />
        <Button>Enter</Button>
      </Container>
    </Background>
  )
}

export default SignIn
