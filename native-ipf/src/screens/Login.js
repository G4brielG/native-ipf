import { useState, useEffect } from 'react'
import { FormControl, Box, Input, Stack, WarningOutlineIcon, Button, Text } from 'native-base'

const Login = () => {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState([])

  const validacion = () => {
    if (formData.user !== '' || formData.user !== undefined) {
      console.log('-- OKAY1 --')
    } else  {
      setErrors({
        user: 'se require usuario'
      })
    }

    if (formData.pass !== '' || formData.pass !== undefined) {
      console.log('-- OKAY2 --')
    } else {
      setErrors({
        pass: 'se require contraseña'
      })
    }
  } 

  useEffect(() => {
    console.log(formData)
  }, [formData])
  return (
    <Box alignItems="center">
      <Box w="100%" maxWidth="90%">
        <FormControl isRequired isInvalid={'user' in errors}>
          <Stack mx="4">
            <FormControl.Label>Nombre de usuario</FormControl.Label>
            <Input variant="rounded" type="text" placeholder="usuario"
              onChangeText={value => setFormData({
                ...formData, user: value
            })} />
            {
              errors?.user && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.user}
              </FormControl.ErrorMessage>
            }
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input variant="rounded" type="password" placeholder="contraseña"
              onChangeText={value => setFormData({
                ...formData, pass: value
              })} />
            {
              errors?.pass && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.pass}
              </FormControl.ErrorMessage>
            }
          </Stack>
          <Stack mx="4">
            <Button onPress={validacion}>
              <Text>INICIAR SESION</Text>
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Login