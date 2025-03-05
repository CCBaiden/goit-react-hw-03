import React, { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import './components/SearchBox/SearchBox.module.css'
import './index.css'

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
  })

  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="app">
      <h1>Contact Manager</h1>
      <SearchBox setFilter={setFilter} />
      <ContactForm setContacts={setContacts} />
      <ContactList
        contacts={contacts}
        filter={filter}
        setContacts={setContacts}
      />{' '}
      {/* setContacts */}
    </div>
  )
}

export default App
