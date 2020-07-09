// import React from 'react';
// import './DropDown.css';
// import ContactList from './ContactList'

// export default class DropDown extends React.Component {
//     // state = {
    //     contacts: [],
    //     filteredContacts: [],
    //     isActive: false,
    //     selectedContact: '',
    // };

    // componentDidMount() {
    //     fetch('http://localhost:5000')
    //     .then(response => response.json())
    //     .then(contacts => {
    //         const validatedContacts = contacts.filter(contact => contact.name !== null)
    //         this.setState({ contacts: validatedContacts, filteredContacts: validatedContacts })
    //     });
    // }

    // handleContactSelection = (event) => {
    //     this.setState({selectedContact: event.target.innerText})
    // }

//     handleTextChange = (event) => {
//         const input = event.target.value;
//         this.setState({filteredContacts, selectedContact: input});
//     }

//     clickHandler = () => {
//         this.setState({isActive: true});
//     }
             
//     render () {
//         const filteredContacts = this.state.contacts.filter((contact) => {
//             return contact.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
//         })
//         const {isActive, selectedContact} = this.state;
//         return (
//             <div className= 'container'>
//                 {isActive && <label htmlFor="id_select"> Contacts </label>}
//                 <input onClick={this.clickHandler} 
//                 onChange={this.handleTextChange} 
//                 type='text' 
//                 placeholder={isActive ? 'Type or search...' : 'Contacts'} 
//                 value= {selectedContact} />
                // {isActive && <ul>
                // {this.state.filteredContacts.map((contact, index)=>
                //     <li onClick={this.handleContactSelection} key={index}>
                //         {contact.name}
                //     </li>)}
                // </ul>}
//                 {/* <select className={isActive ? "hide" : ""} id="id_select" onClick={this.clickHandler} onChange={this.handleTextChange}>
//                 <option value="" disabled selected>{isActive? '': 'contact'}</option>
//                 {this.state.contacts.map((contact, index)=>
//                     <option value={contact.name} key={index}>
//                         {contact.name}
//                     </option>)}
//                 </select> */}
//                 <ContactList/>
//             </div>
//         )
//     }
// }
      


