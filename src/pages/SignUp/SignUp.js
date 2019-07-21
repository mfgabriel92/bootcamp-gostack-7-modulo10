import React, { useRef, useState } from 'react'
import { Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Logo,
  TextInput,
  SubmitButton,
  SignInLink,
  SignInText,
} from './styles'
import { signUp } from '../../store/auth/actions'
import Background from '../../componenents/Background'
import logo from '../../assets/logo.png'

function SignUp({ navigation }) {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)
  const [confPass, setConfPass] = useState(null)
  const emailRef = useRef()
  const passRef = useRef()
  const confPassRef = useRef()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.auth.isLoading)

  function handleOnSubmit() {
    if (pass !== confPass) {
      Alert.alert('Error', 'Passwords do not match')
      return
    }

    dispatch(signUp(name, email, pass))
  }

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
          onChangeText={setName}
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
          onChangeText={setEmail}
        />
        <TextInput
          icon="lock"
          placeholder="Your secret password"
          secureTextEntry
          returnKeyType="next"
          ref={passRef}
          onSubmitEditing={() => confPassRef.current.focus()}
          onChangeText={setPass}
        />
        <TextInput
          icon="lock"
          placeholder="Your secret password (again)"
          secureTextEntry
          returnKeyType="send"
          ref={confPassRef}
          onSubmitEditing={handleOnSubmit}
          onChangeText={setConfPass}
        />

        <SubmitButton onPress={handleOnSubmit} isLoading={isLoading}>
          Register
        </SubmitButton>

        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Already have an account? Login now.</SignInText>
        </SignInLink>
      </Container>
    </Background>
  )
}

export default SignUp
