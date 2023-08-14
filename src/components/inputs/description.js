import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage
} from '@chakra-ui/react'


export const DescriptionTextArea = ({ isValid, value, onChange }) => {

  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Descrição</FormLabel>
      <Textarea
        name='description'
        value={value}
        placeholder="Descrição da receita"
        onChange={onChange} />
      {!isValid ? (
        <FormErrorMessage as="p">
          Nome deve ter ao menos 4 caracteres.
        </FormErrorMessage>
      ) : undefined}
    </FormControl>
  )
}