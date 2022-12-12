import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      {fontsLoaded ? <Text>Hello world</Text> : <Text>Não carregou</Text> }      
    </View>
  )
}