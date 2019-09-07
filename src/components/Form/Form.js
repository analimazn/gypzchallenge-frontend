import React from 'react'
import moment from 'moment'
import axios from 'axios'
import { formValidationSchema } from '../../config/FormValidation'
import { Container, Form, Input, Button, Alert, Text, Label } from './FormStyle'
import { Formik } from 'formik'


export class CadasterCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showScreen: true
    }
  }

  async componentDidMount() {
    try {
      const connection = await this.getIndex()
      if (connection === undefined) {
        this.setState({ showScreen: false })
        throw Error(connection.message)
      }
    } catch (err) {
      console.error(err)
    }
  }

  async getIndex() {
    try {
      const result = await axios.get('http://0.0.0.0:3000/')
      if (result.status !== 200) {
        throw Error(result.message)
      }
      return result
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <Container>
        {!this.state.showScreen && 
          <Alert> Ocorreu um erro, por favor tente novamente mais tarde :( </Alert>
        }
        {this.state.showScreen &&
          <Formik
            ref={(ref) => this.formik = ref}
            initialValues={{
              firstName: '',
              lastName: '',
              document: '',
              bornDate: '',
              cellphoneNumber: '',
              country: '',
              df: '',
              county: '',
              postCode: '',
              neighborhood: '',
              street: '',
              houseNumber: '',
              moreInfo: '',
              amount: ''
            }}
            validate={values => {
              let errors = {}
              let age = moment.duration(moment().diff(values.bornDate)).asYears()

              if (!values.bornDate) {
                errors.bornDate = "Data de nascimento é obrigatória"
              } else if (age < 18) {
                errors.bornDate = 'Mínimo 18 anos'
              }

              return errors
            }}
            onSubmit={ async (values, bag) => {
              try {
                const result = await axios.post('http://0.0.0.0:3000/order', { data: values })

                if (result === undefined || result.status !== 200) {
                  alert('Por favor, confira se os seus dados estão corretos')
                  throw Error(result.message)
                } 
                
                alert('Dados salvos com sucesso')
                bag.resetForm()
              } catch (err) {
                console.error(err)
              }
            }}
            validationSchema={formValidationSchema}
            render={({
              touched,
              errors,
              values,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
                <Form onSubmit={handleSubmit}>
                  <Label>
                    Nome *
                    {errors.firstName && <Text color="red">{errors.firstName}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName || ''}
                      border={errors.firstName && "1px solid red"}
                      type="text"
                      name="firstName"
                    />
                  </Label>

                  <Label>
                    Sobrenome *
                    {errors.lastName && <Text color="red">{errors.lastName}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName || ''}
                      border={errors.lastName && "1px solid red"}
                      type="text"
                      name="lastName"
                    />
                  </Label>

                  <Label>
                    CPF *
                    {errors.document && <Text color="red">{errors.document}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.document || ''}
                      border={errors.document && "1px solid red"}
                      type="number"
                      name="document"
                      placeholder="Somente números"
                    />
                  </Label>

                  <Label>
                    Data de Nascimento *
                    {errors.bornDate && <Text color="red">{errors.bornDate}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bornDate || ''}
                      border={errors.bornDate && "1px solid red"}
                      type="date"
                      name="bornDate"
                    />
                  </Label>

                  <Label>
                    Celular *
                    {errors.cellphoneNumber && <Text color="red">{errors.cellphoneNumber}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cellphoneNumber || ''}
                      border={errors.cellphoneNumber && "1px solid red"}
                      type="number"
                      name="cellphoneNumber"
                      placeholder="Somente números (DDD + Número)"
                    />
                  </Label>

                  <Label>
                    Renda *
                    {errors.amount && <Text color="red">{errors.amount}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.amount || ''}
                      border={errors.amount && "1px solid red"}
                      type="number"
                      name="amount"
                      placeholder="Somente números (R$ 100,00)"
                    />
                  </Label>

                  <Label>
                    País *
                    {errors.country && <Text color="red">{errors.country}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.country || ''}
                      type="text"
                      name="country"
                    />
                  </Label>

                  <Label>
                    UF *
                    {errors.df && <Text color="red">{errors.df}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.df || ''}
                      type="text"
                      name="df"
                    />
                  </Label>

                  <Label>
                    Cidade *
                    {errors.county && <Text color="red">{errors.county}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.county || ''}
                      type="text"
                      name="county"
                    />
                  </Label>

                  <Label>
                    CEP *
                  {errors.postCode && <Text color="red">{errors.postCode}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.postCode || ''}
                      border={errors.postCode && "1px solid red"}
                      type="number"
                      name="postCode"
                      placeholder="Somente números"
                    />
                  </Label>

                  <Label>
                    Bairro *
                    {errors.neighborhood && <Text color="red">{errors.neighborhood}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.neighborhood || ''}
                      type="text"
                      name="neighborhood"
                    />
                  </Label>

                  <Label>
                    Rua *
                    {errors.street && <Text color="red">{errors.street}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.street || ''}
                      type="text"
                      name="street"
                    />
                  </Label>

                  <Label>
                    Número da residência *
                    {errors.houseNumber && <Text color="red">{errors.houseNumber}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.houseNumber || ''}
                      border={errors.houseNumber && "1px solid red"}
                      type="number"
                      name="houseNumber"
                      placeholder="Somente números"
                    />
                  </Label>

                  <Button
                    type="submit"
                  > Enviar
                </Button>
                </Form>
              )}
          />
        }
      </Container>
    )
  }
}
