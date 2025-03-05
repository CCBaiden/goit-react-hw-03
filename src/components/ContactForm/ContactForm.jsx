import { nanoid } from 'nanoid'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './ContactForm.module.css'

// Form doğrulama
const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required('Name is required'),
  number: Yup.string().min(3).max(50).required('Number is required'),
})

const ContactForm = ({ setContacts }) => {
  // Form verisi gonderildiginde
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }

    // Yeni kisiyi ekle ve localstorage kaydet
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact]
      localStorage.setItem('contacts', JSON.stringify(updatedContacts))
      return updatedContacts
    })

    resetForm() // Formu sıfırla
  }

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.fieldContainer}>
            <Field
              className={styles.input}
              name="name"
              type="text"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.fieldContainer}>
            <Field
              className={styles.input}
              name="number"
              type="text"
              placeholder="Number"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>

          <button className={styles.submitButton} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm
