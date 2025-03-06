import React from 'react'
import 'material-icons/iconfont/material-icons.css'
import styles from './ContactItem.module.css'

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <p className={styles.contactName}>
          <i className="material-icons">&#xe7fd;</i> {contact.name}
        </p>
        <p className={styles.contactNumber}>
          <i className="material-icons">phone</i> {contact.number}
        </p>
      </div>
      <button
        onClick={() => onDelete(contact.id)}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </li>
  )
}

export default ContactItem
