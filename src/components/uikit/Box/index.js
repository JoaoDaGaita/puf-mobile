import { View } from 'react-native'
import styled from 'styled-components/native'

import {
  background,
  margin,
  padding,
  flexbox
} from '../../../components/Theme/styled'

export const Box = styled(View)`
  ${background}
  ${margin}
  ${padding}
  ${flexbox}
`