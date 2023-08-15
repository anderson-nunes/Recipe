import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'

export const EmailInput = ({ isValid, value, onChange }) => {

  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Email</FormLabel>
      <Input
        name='email'
        // type='email'
        value={value}
        placeholder="Email"
        onChange={onChange} />
      {!isValid ? (
        <FormErrorMessage as="p">
          E-mail inválido.
        </FormErrorMessage>
      ) : undefined}
    </FormControl>
  )
}