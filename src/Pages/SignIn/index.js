import React from 'react'
import {
  Container,
  Logo,
  TextInput,
  SubmitButton,
  SignInLink,
  SignInText,
} from './styles'
import Background from '../../componenents/Background'
import logo from '../../assets/logo.png'

function SignIn() {
  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <TextInput
          icon="email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Your e-mail"
        />
        <TextInput
          icon="lock"
          placeholder="Your secret password"
          secureTextEntry
        />
        <SubmitButton>Enter</SubmitButton>
        <SignInLink>
          <SignInText>No account yet? Create one for free.</SignInText>
        </SignInLink>
      </Container>
    </Background>
  )
}

export default SignIn
