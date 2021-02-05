import React from 'react';
import logo from './logo.svg';
import './ContactsList.css';
import ContactsList from './ContactsList'
import SearchBox from './SearchBox'

export default class App extends React.Component {
  state = {
    contacts: [],
    isActive: false,
    searchContactName: '',
    filteredContacts: [],
};

componentDidMount() {
    fetch('http://localhost:5000')
    .then(response => response.json())
    .then(contacts => {
        const validatedContacts = contacts.filter(contact => contact.name !== null);
        const lowerCaseContact = validatedContacts.map(contact => ({name: contact.name.toLowerCase()}))
        this.setState({ contacts: lowerCaseContact, filteredContacts: lowerCaseContact})
    });
}


handleInput = (e) => {
  this.setState ({searchContactName: e.target.value});
  if(e.target.value.length > 2){
    const payload = {
      userInput: e.target.value,
    }
    fetch('http://localhost:5000/filter',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(payload),
    }).then(response => response.json()).then(filteredContacts => {
      this.setState({filteredContacts: filteredContacts});
    });
  }else {
    this.setState({filteredContacts: this.state.contacts})
  }
}

handelSelect = (e) => {
  this.setState ({searchContactName: e.target.innerText})
} 

focusHandler = () => {
  this.setState({isActive: !this.state.isActive});
}
  
render() {
  const {filteredContacts, searchContactName, isActive} = this.state;
  return (
    <div>
      <SearchBox isActive={isActive} handleFocus={this.focusHandler} handleInput={this.handleInput} searchContactName={searchContactName}/>
      {isActive && <ContactsList  contacts={filteredContacts} selectContact={this.handelSelect}/>}
    </div>
  )
}
}
