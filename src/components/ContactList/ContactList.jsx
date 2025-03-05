import ContactItem from '../ContactItem/ContactItem'

const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}

export default ContactList
