import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { NativeBaseProvider, Box } from 'native-base'
import { Loading } from 'src/components'
import { THEME } from 'src/theme'
import { SignIn, SignUp } from 'src/screens'

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      {fontsLoaded ? <SignUp /> : <Loading />  }      
    </NativeBaseProvider>
  )
}
