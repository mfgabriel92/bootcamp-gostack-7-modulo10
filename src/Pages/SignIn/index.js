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

function SignIn({ navigation }) {
  const passRef = useRef()

  function handleOnSubmit() {}

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
          returnKeyType="next"
          onSubmitEditing={() => passRef.current.focus()}
        />
        <TextInput
          icon="lock"
          placeholder="Your secret password"
          secureTextEntry
          returnKeyType="send"
          ref={passRef}
          onSubmitEditing={handleOnSubmit}
        />

        <SubmitButton onPress={handleOnSubmit}>Enter</SubmitButton>

        <SignInLink onPress={() => navigation.navigate('SignUp')}>
          <SignInText>No account yet? Create one for free.</SignInText>
        </SignInLink>
      </Container>
    </Background>
  )
}

export default SignIn
