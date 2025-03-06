import ContactItem from '../ContactItem/ContactItem'
import styles from './ContactList.module.css'

const ContactList = ({ contacts, filter, setContacts }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    )
  }

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete} //
        />
      ))}
    </ul>
  )
}

export default ContactList
