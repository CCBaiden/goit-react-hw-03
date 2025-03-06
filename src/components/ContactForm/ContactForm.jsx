import { useEffect } from 'react'

const ContactForm = ({ setContacts }) => {
  // Form gönderildiğinde
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }

    // Yeni kişi ekle
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact]
      localStorage.setItem('contacts', JSON.stringify(updatedContacts))
      return updatedContacts
    })

    resetForm()
  }

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [setContacts])

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
