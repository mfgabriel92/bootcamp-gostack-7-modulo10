import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import { COLOR_1, COLOR_2 } from 'react-native-dotenv'

export default styled(LinearGradient).attrs({
  colors: [COLOR_1, COLOR_2],
})`
  flex: 1;
`
