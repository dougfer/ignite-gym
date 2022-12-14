import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SignIn, SignUp } from 'src/screens'

type AuthRoutes = {
  signIn: undefined
  signOut: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name='signIn'
        component={SignIn}
      />
      <Screen 
        name='signOut'
        component={SignUp}
      />
    </Navigator>
  )
}