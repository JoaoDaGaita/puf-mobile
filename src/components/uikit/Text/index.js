import { Text as BaseText } from 'react-native'
import styled from 'styled-components/native'

import { th, margin, padding, font } from '~/components/Theme/styled'

export const Text = styled(BaseText)`
  color: ${th.color('white')};
  ${margin}
  ${padding}
  ${font}
`
