import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../store/user/actions'
import { logoff } from '../../store/auth/actions'
import {
  Container,
  Title,
  Form,
  TextInput,
  Separator,
  SubmitButton,
  LogoutButton,
} from './styles'
import Background from '../../componenents/Background'

function Profile() {
  const emailRef = useRef()
  const oldPassRef = useRef()
  const newPassRef = useRef()
  const confPassRef = useRef()

  const me = useSelector(state => state.user.me)

  const [name, setName] = useState(me.name)
  const [email, setEmail] = useState(me.email)
  const [oldPass, setOldPass] = useState(null)
  const [newPass, setNewPass] = useState(null)
  const [confPass, setConfPass] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    setOldPass(null)
    setNewPass(null)
    setConfPass(null)
  }, [me])

  function handleOnSubmit() {
    dispatch(updateUser({ name, email, oldPass, newPass, confPass }))
  }

  function handleOnLogout() {
    dispatch(logoff())
  }

  return (
    <Background>
      <Container>
        <Title>My profile</Title>

        <Form>
          <TextInput
            icon="account-edit"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Your fullname"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <TextInput
            icon="email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Your e-mail"
            returnKeyType="send"
            value={email}
            ref={emailRef}
            onChangeText={setEmail}
          />

          <Separator />

          <TextInput
            icon="lock"
            placeholder="Old password"
            secureTextEntry
            returnKeyType="next"
            value={oldPass}
            ref={oldPassRef}
            onSubmitEditing={() => newPassRef.current.focus()}
            onChangeText={setOldPass}
          />
          <TextInput
            icon="lock"
            placeholder="New password"
            secureTextEntry
            returnKeyType="next"
            value={newPass}
            ref={newPassRef}
            onSubmitEditing={() => confPassRef.current.focus()}
            onChangeText={setNewPass}
          />
          <TextInput
            icon="lock"
            placeholder="New password (again)"
            secureTextEntry
            returnKeyType="send"
            value={confPass}
            ref={confPassRef}
            onChangeText={setConfPass}
          />

          <SubmitButton onPress={handleOnSubmit}>Update</SubmitButton>
          <LogoutButton onPress={handleOnLogout}>Logout</LogoutButton>
        </Form>
      </Container>
    </Background>
  )
}

export default Profile
