import React, { useState } from 'react'
import { HomeHeader } from 'src/components'
import { Group, ExerciseCard } from './components'
import { HStack, VStack, FlatList, Heading, Text } from 'native-base'

export const Home: React.FC = () => {
  const [groupSelected, setGroupSelected] = useState('costas')
  const [groups, setGroups] = useState(['costa', 'ombro', 'tríceps', 'bíceps'])
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra'])

  const handleSetGroup = (groupName: string) => {
    setGroupSelected(groupName)
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={8}
        maxHeight={10}
        renderItem={({ item }) => (
          <Group 
            name={item} 
            isActive={groupSelected === item} 
            onPress={() => handleSetGroup(item)}
          />
        )}
      />
      <VStack flex={1} px={8} >
        <HStack justifyContent='space-between' mb={5} >
          <Heading color='gray.200' fontSize='md'>
            Exercícios
          </Heading>
          <Text color='gray.200' fontSize='sm'>{exercises.length}</Text>
        </HStack>
        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => <ExerciseCard /> }
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 20
          }}
        />
        
      </VStack>
    </VStack>
  )
}
