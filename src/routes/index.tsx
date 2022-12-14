import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { useTheme, Box } from 'native-base'

export const Routes = () => {
  const NBTheme = useTheme()

  const generateTheme = () => {
    const theme = DefaultTheme
    theme.colors.background = NBTheme.colors.gray[700]
    return theme
  }

  return (
    <Box
      flex={1}
      bg='gray.700'
    >
      <NavigationContainer
        theme={generateTheme()}
      >
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}
