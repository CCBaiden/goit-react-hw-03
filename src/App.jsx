import React, { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import './components/SearchBox/SearchBox.module.css'
import './index.css'

const App = () => {
  const [contacts, setContacts] = useState(() => {
    // Ilk basta localStorage'dan veriyi aliyoruz, yoksa varsayilan degeri kullaniyoruz.
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

  useEffect(() => {
    // contacts her degistiginde localStorage'a kaydediyoruz.
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="app">
      <h1>Contact Manager</h1>
      <SearchBox />
      <ContactForm setContacts={setContacts} />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
