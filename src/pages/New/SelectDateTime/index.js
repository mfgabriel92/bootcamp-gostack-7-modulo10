import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SelectDateTime from './SelectDateTime'

export default {
  screen: SelectDateTime,
  navigationOptions: ({ navigation }) => ({
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Dashboard')
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
        Select date and time
      </Text>
    ),
  }),
}
