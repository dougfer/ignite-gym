import React from 'react'
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackgroundImg from 'src/assets/background.png'
import LogoSvg from 'src/assets/logo.svg'
import { Input, Button } from 'src/components'

export const SignUp: React.FC = () => {
  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        flex={1}
        bgColor='gray.700'
        px={10}
      >
        <Image 
          source={BackgroundImg}
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
            Crie sua conta
          </Heading>
        </Center>
        <Center>
          <Input 
            placeholder='Nome'
          />
          <Input 
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input 
            placeholder='Senha'
            secureTextEntry
          />

          <Button title='Criar e acessar' />
        </Center>
        <Center mt={24}>
          <Button title='Voltar para o login' variant='outline' />
        </Center>
      </VStack>
    </ScrollView>
  )
}
