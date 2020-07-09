import React from 'react';
import logo from './logo.svg';
import './ContactsList.css';
import ContactsList from './ContactsList'
import SearchBox from './SearchBox'

export default class App extends React.Component {
  state = {
    contacts: [],
    isActive: false,
    selectedContact: '',
    searchContactName: ''
};

componentDidMount() {
    fetch('http://localhost:5000')
    .then(response => response.json())
    .then(contacts => {
        const validatedContacts = contacts.filter(contact => contact.name !== null)
        this.setState({ contacts: validatedContacts})
    });
}

handleInput = (e) => {
  console.log(e.target.value)
  this.setState ({searchContactName: e.target.value})
}

handleContactSelection = (event) => {
    this.setState({selectedContact: event.target.innerText})
}

focusHandler = () => {
  this.setState({isActive: !this.state.isActive});
}
  
render() {
  const {contacts, searchContactName, isActive} = this.state;
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchContactName.toLowerCase())
  });
  console.log(filteredContacts);
  return (
    <div>
      <SearchBox isActive={isActive} handleFocus={this.focusHandler} handleInput={this.handleInput} searchContactName={searchContactName}/>
      {isActive && <ContactsList  filteredContacts={filteredContacts}/>}
      
    </div>
  )
}
}
