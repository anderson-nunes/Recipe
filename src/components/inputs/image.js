import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'


export const ImageInput = ({ isValid, value, onChange }) => {

  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Link da Imagem</FormLabel>
      <Input
        name='imageUrl'
        value={value}
        onChange={onChange}
        placeholder="Link para a imagem"
      />
      {!isValid ? (
        <FormErrorMessage as="p">
          {/* Nome deve ter ao menos 4 caracteres. */}
        </FormErrorMessage>
      ) : undefined}
    </FormControl>
  )
}