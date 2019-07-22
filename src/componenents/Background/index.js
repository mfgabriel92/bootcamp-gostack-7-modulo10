import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import { COLOR_1, COLOR_2 } from 'babel-plugin-dotenv-import'

export default styled(LinearGradient).attrs({
  colors: [COLOR_1, COLOR_2],
})`
  flex: 1;
  padding: 20px;
`
