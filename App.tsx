import React from 'react'
import { THEME } from 'src/theme'
import { Routes } from 'src/routes'
import { Loading } from 'src/components'
import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      {fontsLoaded ? <Routes /> : <Loading />  }      
    </NativeBaseProvider>
  )
}
