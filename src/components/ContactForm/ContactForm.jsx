import { nanoid } from 'nanoid'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './ContactForm.module.css'

// Form dogrulama
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number cannot exceed 50 characters')
    .required('Required'),
})

const ContactForm = ({ setContacts }) => {
  // Form gonderildiginde
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }

    // Yeni kisi ekle 
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact]
      localStorage.setItem('contacts', JSON.stringify(updatedContacts))
      return updatedContacts
    })

    resetForm() 
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
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <Field className={styles.input} name="name" type="text" id="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          <div className={styles.fieldContainer}>
            <label htmlFor="number" className={styles.label}>
              Number
            </label>
            <Field
              className={styles.input}
              name="number"
              type="text"
              id="number"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.errorMessage}
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
