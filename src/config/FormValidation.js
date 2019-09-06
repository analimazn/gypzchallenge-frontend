import * as Yup from 'yup'

export const formValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Mínimo 3 caracteres')
    .max(30, 'Máximo 30 caracteres')
    .trim()
    .uppercase()
    .required('Por favor, insira o seu primeiro nome'),
  lastName: Yup.string()
    .min(3, 'Mínimo 3 caracteres')
    .max(30, 'Máximo 30 caracteres')
    .trim()
    .uppercase()
    .required('Por favor, insira o seu sobrenome'),
  document: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .test('len', 'Mínimo 11 caracteres', doc => doc && doc.toString().length === 11)
    .required('Por favor, insira o seu CPF'),
  bornDate: Yup.date()
    .required('Por favor, insira a sua data de nascimento'),
  cellphoneNumber: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .test('len', 'Mínimo 11 caracteres', cell => cell && cell.toString().length === 11)
    .required('Por favor, insira o número do seu celular'),
  country: Yup.string()
    .min(3, 'Mínimo 3 caracteres')
    .max(30, 'Máximo 30 caracteres')
    .trim()
    .uppercase()
    .required('Por favor, insira o nome do seu País'),
  df: Yup.string()
    .min(2, 'Mínimo 2 caracteres')
    .max(30, 'Máximo 30 caracteres')
    .trim()
    .uppercase()
    .required('Por favor, insira o nome do seu Estado'),
  county: Yup.string()
    .min(3, 'Mínimo 3 caracteres')
    .max(30, 'Máximo 30 caracteres')
    .trim()
    .uppercase()
    .required('Por favor, insira o nome da sua Cidade'),
  postCode: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .test('len', 'Mínimo 8 caracteres', zip => zip && zip.toString().length === 8)
    .required('Por favor, insira o seu CEP'),
  neighborhood: Yup.string()
    .min(3, 'Mínimo 3 caracteres')
    .max(30, 'Máximo 30 caracteres')
    .trim()
    .uppercase()
    .required('Por favor, insira o nome do seu Bairro'),
  street: Yup.string()
    .min(3, 'Mínimo 3 caracteres')
    .max(30, 'Máximo 30 caracteres')
    .trim()
    .uppercase()
    .required('Por favor, insira o nome da sua Rua'),
  houseNumber: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .required('Por favor, insira o número da sua residência'),
  moreInfo: Yup.string()
    .trim()
    .uppercase(),
  amount: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .min(100, 'Mínimo R$ 100,00')
    .required('Por favor, insira a sua renda mensal')
})
