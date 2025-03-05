const ContactItem = ({ contact, onDelete }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  )
}
