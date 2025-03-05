import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values, id: `id-${Date.now()}` })
    resetForm()
  }

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Name is required'),
    number: Yup.string().min(3).max(50).required('Number is required'),
  })

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Field type="text" id="number" name="number" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm
