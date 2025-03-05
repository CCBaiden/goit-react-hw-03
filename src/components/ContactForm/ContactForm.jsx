import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required('Name is required'),
  number: Yup.string().min(3).max(50).required('Number is required'),
})

const ContactForm = ({ setContacts }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }

    // Contacts listesini güncelle
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact]

      // Yeni contact'ı localStorage'a kaydet
      localStorage.setItem('contacts', JSON.stringify(updatedContacts))

      return updatedContacts
    })

    resetForm() // Formu sıfırla
  }

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="name" type="text" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
        <Field name="number" type="text" placeholder="Number" />
        <ErrorMessage name="number" component="div" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm
