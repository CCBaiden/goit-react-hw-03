import React from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import './index.css'

const App = () => {
  return (
    <div className="app">
      <h1>Contact Manager</h1>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  )
}

export default App
