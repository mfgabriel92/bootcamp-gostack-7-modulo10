import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Logo,
  TextInput,
  SubmitButton,
  SignInLink,
  SignInText,
} from './styles'
import { signIn } from '../../store/auth/actions'
import Background from '../../componenents/Background'
import logo from '../../assets/logo.png'

function SignIn({ navigation }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const passRef = useRef()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.auth.isLoading)

  function handleOnSubmit() {
    dispatch(signIn(email, pass))
  }

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
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          icon="lock"
          placeholder="Your secret password"
          secureTextEntry
          returnKeyType="send"
          ref={passRef}
          onSubmitEditing={handleOnSubmit}
          value={pass}
          onChangeText={setPass}
        />

        <SubmitButton onPress={handleOnSubmit} isLoading={isLoading}>
          Enter
        </SubmitButton>

        <SignInLink onPress={() => navigation.navigate('SignUp')}>
          <SignInText>No account yet? Create one for free.</SignInText>
        </SignInLink>
      </Container>
    </Background>
  )
}

export default SignIn
