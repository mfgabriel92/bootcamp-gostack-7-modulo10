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

function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <TextInput
          icon="account-edit"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Your fullname"
        />
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
        <TextInput
          icon="lock"
          placeholder="Your secret password (again)"
          secureTextEntry
        />
        <SubmitButton>Register</SubmitButton>
        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Already have an account? Login now.</SignInText>
        </SignInLink>
      </Container>
    </Background>
  )
}

export default SignUp
