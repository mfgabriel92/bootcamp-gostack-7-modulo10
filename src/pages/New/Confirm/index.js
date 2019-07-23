import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Confirm from './Confirm'

export default {
  screen: Confirm,
  navigationOptions: ({ navigation }) => ({
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
      >
        <Icon name="chevron-left" size={24} color="#fff" />
      </TouchableOpacity>
    ),
    headerTitle: (
      <Text
        style={{
          fontSize: 20,
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        Confirmation
      </Text>
    ),
  }),
}
