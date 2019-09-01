import React from 'react'
import moment from 'moment'
import { Container, Form, Input, Button, Text, Label } from './FormStyle'
import { Formik } from 'formik'

export class CadasterCard extends React.Component {
  render() {
    return (
      <Container>
        <Formik
          initialValues={
            { 
              firstName: '', 
              lastName: '',
              document: '',
              bornDate: '',
              zipCode: '',
              houseNumber: '',
              moreInfo: '',
              phoneNumber: '',
              income: ''
            }
          }
          validate={ values => {
            let errors = {}

            let age = moment.duration(moment().diff(values.bornDate)).asYears();
            let documentLength = values.document.length
            let zipCodeLength = values.zipCode.length
            let phoneNumberLength = values.phoneNumber.length

            if (!values.firstName) {
              errors.firstName = 'Nome é obrigatório'
            }

            if (!values.lastName) {
              errors.lastName = 'Sobrenome é obrigatório'
            }

            if (!values.document) {
              errors.document = 'CPF é obrigatório';
            } else if (documentLength < 11 || documentLength > 11) {
              errors.document = 'CPF inválido'
            }

            if (!values.bornDate) {
              errors.bornDate = "Data de nascimento é obrigatória"
            } else if (age < 18) {
              errors.bornDate = 'Mínimo 18 anos'
            }

            if (!values.zipCode) {
              errors.zipCode = "CEP é obrigatório"
            } else if (zipCodeLength < 8 || zipCodeLength > 8) {
              errors.zipCode = 'CEP inválido'
            }

            if (!values.houseNumber) {
              errors.houseNumber = "Número da residência é obrigatório"
            }

            if (!values.phoneNumber) {
              errors.phoneNumber = "Número de telefone é obrigatório"
            } else if (phoneNumberLength < 10 || phoneNumberLength > 11) {
              errors.phoneNumber = 'Número de telefone inválido'
            }

            if (!values.income) {
              errors.income = "Valor da renda é obrigatório"
            } else if (parseInt(values.income) < 1000) {
              errors.income = "Valor da renda mínima precisa ser de R$1.000,00"
            }

            return errors
          }}
          onSubmit={ values => {
            console.log(values)
          }}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <Form onSubmit={ handleSubmit }>
              <Label>
                Nome *
                { errors.firstName && <Text color="red">{ errors.firstName }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.firstName }
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
                  value={ values.lastName }
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
                  value={ values.document }
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
                  value={ values.bornDate }
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
                  value={ values.zipCode }
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
                  value={ values.houseNumber }
                  border={ errors.houseNumber && "1px solid red" }
                  type="number"
                  name="houseNumber"
                />
              </Label>

              <Label>
                Complemento
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.moreInfo }
                  type="text"
                  name="moreInfo"
                />
              </Label>
              
              <Label>
                Telefone *
                { errors.phoneNumber && <Text color="red">{ errors.phoneNumber }</Text> }
                <Input
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.phoneNumber }
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
                  value={ values.income }
                  border={ errors.income && "1px solid red" }
                  type="number"
                  name="income"
                />
              </Label>
              
              <Button type="submit">Enviar</Button>
            </Form>
          )}
        />
      </Container>
    )
  }
}
