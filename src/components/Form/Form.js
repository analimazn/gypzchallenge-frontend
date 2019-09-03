import React from 'react'
import moment from 'moment'
import * as Yup from 'yup'
import { Container, Form, Input, Button, Text, Label } from './FormStyle'
import { Formik } from 'formik'

const initialForm = {
  firstName: '',
  lastName: '',
  document: '',
  bornDate: '',
  zipCode: '',
  houseNumber: '',
  moreInfo: '',
  cellphoneNumber: '',
  phoneNumber: '',
  income: ''
}

const formValidationSchema = Yup.object().shape({
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
  bornDate: Yup.date(),
  zipCode: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .test('len', 'Mínimo 8 caracteres', zip => zip && zip.toString().length === 8)
    .required('Por favor, insira o seu CEP'),
  houseNumber: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .required('Por favor, insira o número da sua residência'),
  moreInfo: Yup.string()
    .trim()
    .uppercase(),
  cellphoneNumber: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .test('len', 'Mínimo 11 caracteres', cell => cell && cell.toString().length === 11)
    .required('Por favor, insira o número do seu celular'),
  phoneNumber: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .test('len', 'Mínimo 10 caracteres', phone => phone && phone.toString().length === 10),
  income: Yup.number()
    .positive('Por favor, insira valores inteiros')
    .min(100, 'Mínimo R$ 100,00')
    .required('Por favor, insira a sua renda mensal')
})


export class CadasterCard extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    this.formik.resetForm()
  }

  render() {
    return (
      <Container>
        <Formik
          ref={(ref) => this.formik = ref}
          initialValues={{
            firstName: '',
            lastName: '',
            document: '',
            bornDate: '',
            zipCode: '',
            houseNumber: '',
            moreInfo: '',
            cellphoneNumber: '',
            phoneNumber: '',
            income: ''
          }}
          validate={ values => {
            let errors = {}
            let age = moment.duration(moment().diff(values.bornDate)).asYears()
            
            if (!values.bornDate) {
              errors.bornDate = "Data de nascimento é obrigatória"
            } else if (age < 18) {
              errors.bornDate = 'Mínimo 18 anos'
            }
            return errors
          }}
          onSubmit={ values => {
            alert(values, 2, null)
          }}
          onReset={ values => {

          }}
          validationSchema={ formValidationSchema }
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          }) => (
            <Form onSubmit={ handleSubmit }>
              <Label>
                Nome *
                { errors.firstName && <Text color="red">{ errors.firstName }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.firstName || '' }
                  border={ errors.firstName && "1px solid red" }
                  type="text" 
                  name="firstName" 
                />
              </Label>
                
              <Label>
                Sobrenome *
                { errors.lastName && <Text color="red">{ errors.lastName }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.lastName || '' }
                  border={ errors.lastName && "1px solid red" }
                  type="text"
                  name="lastName"
                />
              </Label>
                
              <Label>
                CPF *
                { errors.document && <Text color="red">{ errors.document }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value= { values.document || '' }
                  border={ errors.document && "1px solid red" }
                  type="number"
                  name="document"
                  placeholder="Somente números"
                />
              </Label>
              
              <Label>
                Data de Nascimento *
                { errors.bornDate && <Text color="red">{ errors.bornDate }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.bornDate || '' }
                  border={ errors.bornDate && "1px solid red" }
                  type="date"
                  name="bornDate"
                />
              </Label>
                
              <Label>
                CEP *
                { errors.zipCode && <Text color="red">{ errors.zipCode }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.zipCode || '' }
                  border={ errors.zipCode && "1px solid red" }
                  type="number"
                  name="zipCode"
                  placeholder="Somente números"
                />
              </Label>
                
              <Label>
                Número da residência *
                { errors.houseNumber && <Text color="red">{ errors.houseNumber }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.houseNumber || '' }
                  border={ errors.houseNumber && "1px solid red" }
                  type="number"
                  name="houseNumber"
                  placeholder="Somente números"
                />
              </Label>

              <Label>
                Complemento
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.moreInfo || '' }
                  type="text"
                  name="moreInfo"
                />
              </Label>
              
              <Label>
                Celular *
                { errors.cellphoneNumber && <Text color="red">{ errors.cellphoneNumber }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.cellphoneNumber || '' }
                  border={ errors.cellphoneNumber && "1px solid red" }
                  type="number"
                  name="cellphoneNumber"
                  placeholder="Somente números (DDD + Número)"
                />
              </Label>

              <Label>
                Telefone
                { errors.phoneNumber && <Text color="red">{ errors.phoneNumber }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.phoneNumber || '' }
                  border={ errors.phoneNumber && "1px solid red" }
                  type="number"
                  name="phoneNumber"
                  placeholder="Somente números (DDD + Número)"
                />
              </Label>
              
              <Label>
                Renda *
                { errors.income && <Text color="red">{ errors.income }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.income || '' }
                  border={ errors.income && "1px solid red" }
                  type="number"
                  name="income"
                  placeholder="Somente números (R$ 100,00)"
                />
              </Label>
              
              <Button 
                type="submit" 
                onReset={ handleReset }
              > Enviar
              </Button>
            </Form>
          )}
        />
      </Container>
    )
  }
}
