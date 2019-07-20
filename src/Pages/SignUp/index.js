import React, { useRef } from 'react'
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
  const emailRef = useRef()
  const passRef = useRef()
  const confPassRef = useRef()

  function handleOnSubmit() {}

  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <TextInput
          icon="account-edit"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Your fullname"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <TextInput
          icon="email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Your e-mail"
          returnKeyType="next"
          ref={emailRef}
          onSubmitEditing={() => passRef.current.focus()}
        />
        <TextInput
          icon="lock"
          placeholder="Your secret password"
          secureTextEntry
          returnKeyType="next"
          ref={passRef}
          onSubmitEditing={() => confPassRef.current.focus()}
        />
        <TextInput
          icon="lock"
          placeholder="Your secret password (again)"
          secureTextEntry
          returnKeyType="send"
          ref={confPassRef}
          onSubmitEditing={handleOnSubmit}
        />

        <SubmitButton onPress={handleOnSubmit}>Register</SubmitButton>

        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Already have an account? Login now.</SignInText>
        </SignInLink>
      </Container>
    </Background>
  )
}

export default SignUp
