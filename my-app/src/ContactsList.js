import React from 'react';
import Contact from './Contact'

function ContactsList (props) {
    const contacts = props.filteredContacts.map((contact, index) => {
    return <Contact key={index} name={contact.name}/>
 })
    return (
        <div>
            {contacts}
        </div>
    )
    }


export default ContactsList;