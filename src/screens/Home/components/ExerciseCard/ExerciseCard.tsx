import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Heading, HStack, Icon, Image, Text, VStack } from 'native-base'
import { Entypo } from '@expo/vector-icons'

type ExerciseCardProps = TouchableOpacityProps

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
    >
      <HStack
        bg='gray.500'
        alignItems='center'
        p={2}
        pr={4}
        rounded='md'
        mb={3}
      >
        <Image 
          source={{ uri: 'https://pbs.twimg.com/media/DvsZz-yWkAEsizP.jpg' }}
          alt='Exercise image'
          h={16}
          w={16}
          rounded='md'
          mr={4}
          resizeMode='center'
        />
        <VStack flex={1}>
          <Heading fontSize='lg' color='white'>Remanda unilateral</Heading>
          <Text 
            fontSize='sm' 
            color='gray.200' 
            mt={1}
            numberOfLines={2}
          >
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon 
          as={Entypo}
          name='chevron-thin-right'
          color='gray.300'
        />
      </HStack>

    </TouchableOpacity>
  )
}
