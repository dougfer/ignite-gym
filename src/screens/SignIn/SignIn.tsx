import React from 'react'
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackgroundImg from 'src/assets/background.png'
import LogoSvg from 'src/assets/logo.svg'
import { Input, Button } from 'src/components'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from 'src/routes/auth.routes'

export const SignIn: React.FC = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  
  const handleNewAccount = () => {
    navigation.navigate('signOut')
  }

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        flex={1}
        px={10}
      >
        <Image 
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt='People training'
          resizeMode='contain'
          position='absolute'
        />
        <Center my={24}>
          <LogoSvg />
          <Text 
            color='gray.100'
            fontSize='sm'
          >
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center>
          <Heading
            color='gray.100'
            fontSize='xl'
            mb={6}
            fontFamily='heading'
          >
            Acesse a sua conta
          </Heading>
        </Center>
        <Center>
          <Input 
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input 
            placeholder='Senha'
            secureTextEntry
          />

          <Button title='Acessar' />
        </Center>
        <Center mt={24}>
          <Text
            color='gray.100'
            fontSize='sm'
            mt={3}
            fontFamily='body'
          >
            Ainda não tem acesso?
          </Text>
          <Button onPress={handleNewAccount} title='Criar conta' variant='outline' />
        </Center>
      </VStack>
    </ScrollView>
  )
}
