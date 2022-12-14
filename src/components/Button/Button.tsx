import React from 'react'
import { Button as NBButton, IButtonProps, Text } from 'native-base'

interface ButtonProps extends IButtonProps {
  title: string
  variant?: 'solid' | 'outline'
}

export const Button: React.FC<ButtonProps> = ({ title, variant = 'solid',...rest }) => {

  const buttonOutlineProps = {
    bg: 'transparent',
    borderWidth: 1,
    borderColor: 'green.500',
    _pressed: {
      bg: 'gray.500'
    }
  }

  const textOutlineProps = {
    color: 'green.500'
  }

  return (
    <NBButton
      w='full'
      h={14}
      bg={'green.700'}
      rounded='sm'
      _pressed={{
        bg: 'green.500'
      }}
      {...(variant === 'outline' && buttonOutlineProps)}
      {...rest}
    >
      <Text
        color='white'
        fontFamily='heading'
        fontSize='sm'
        {...(variant === 'outline' && textOutlineProps)}
      >
        {title}
      </Text>
    </NBButton>
  )
}
