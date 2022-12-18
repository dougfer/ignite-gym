import React from 'react'
import { Image, IImageProps } from 'native-base'

type UserPhotoProps = {
  size: number
} & IImageProps

export const UserPhoto: React.FC<UserPhotoProps> = ({ size, ...rest }) => {
  return (
    <Image 
      h={size} 
      w={size} 
      rounded='full' 
      borderWidth={2} 
      borderColor='gray.400'
      {...rest}
    />
  )
}
