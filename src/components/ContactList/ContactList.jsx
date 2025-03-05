import ContactItem from '../ContactItem/ContactItem'

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
    <ul>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete} // onDelete fonksiyonunu
        />
      ))}
    </ul>
  )
}

export default ContactList
