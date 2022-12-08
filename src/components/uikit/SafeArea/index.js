import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

import { background, margin, padding, flexbox } from '~/components/Theme/styled'

export const SafeArea = styled(SafeAreaView)`
  ${background}
  ${margin}
  ${padding}
  ${flexbox}
`
