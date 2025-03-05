const ContactItem = ({ contact }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        onClick={() => {
          /* delete function */
        }}
      >
        Delete
      </button>
    </li>
  )
}

export default ContactItem
