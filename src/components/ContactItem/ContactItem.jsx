import React from 'react'

const ContactItem = ({ contact }) => {
  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
    </li>
  )
}

export default ContactItem
