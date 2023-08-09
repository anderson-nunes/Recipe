import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  FormErrorMessage,
  InputGroup,
  Button
} from '@chakra-ui/react'

export const PasswordInput = ({ isValid, value, onChange }) => {

  const [showPassword, setShowPassword] = useState(false)


  const onClickShowPassord = () => {
    setShowPassword(!showPassword)
  }

  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Senha</FormLabel>
      <InputGroup size='md'>
        <Input
          name='password'
          value={value}
          onChange={onChange}
          pr='4.5rem'
          type={showPassword ? 'text' : 'password'}
          placeholder='Senha com no mínimo 6 caracteres'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={onClickShowPassord}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!isValid ? (
        <FormErrorMessage as="p">
          E-mail inválido.
        </FormErrorMessage>
      ) : undefined}
    </FormControl>
  )
}