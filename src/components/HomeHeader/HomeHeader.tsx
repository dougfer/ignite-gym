import React from 'react'
import { UserPhoto } from '../UserPhoto'
import { MaterialIcons } from '@expo/vector-icons'
import { Heading, HStack, Text, VStack, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native'

export const HomeHeader: React.FC = () => {
  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
      <UserPhoto 
        size={16} 
        source={{ uri: 'https://sm.ign.com/ign_br/screenshot/default/1_ssmb.jpg' }} 
        alt='User image'
        mr={4}
      />
      <VStack flex={1}>
        <Text color='gray.100' fontSize='md'>Olá,</Text>
        <Heading color='gray.100' fontSize='md'>Douglas</Heading>
      </VStack>
      <TouchableOpacity>
        <Icon 
          as={MaterialIcons}
          name='logout'
          color='gray.200'
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}
