import * as Yup from 'yup';

const login_Schema = Yup.object({
    email: Yup.string().email('Invalid email address').required('email is required'),
    password: Yup.string().required('password is required'),
})

const isNumberValid = /^[0]+[7-9]+[0-1]+[0-9]{8}$/; //validates user phone number input

const signup_Schema = Yup.object({
    firstName: Yup.string().required('first name is required'),
    lastName: Yup.string().required('last name is required'),
    email: Yup.string().email('Invalid email address').required('email is required'),
    businessName: Yup.string().required('business name is required'),
    phoneNumber: Yup.string().matches(isNumberValid, 'invalid phone number').required('phone number is required'),
    password: Yup.string().required('password is required'),
})

const invoice_Schema = Yup.object().shape({
    items: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required('Required'),
          description: Yup.string().required('Required'),
          price: Yup.number().min(1, "less tan zero").required('Required'),
          quantity: Yup.number().required('Required'),
        })
      )
      .required('item is required')
  });

const customer_Schema = Yup.object({
    customerName: Yup.string().required('first name is required'),
    customerEmail: Yup.string().email('Invalid email address').required('email is required'),
})

export {login_Schema, signup_Schema, invoice_Schema, customer_Schema}
