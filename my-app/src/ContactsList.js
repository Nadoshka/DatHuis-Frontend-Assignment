import React from 'react';
import Contact from './Contact'

function ContactsList (props) {
    const contacts = props.contacts.map((contact, index) => {
    return <Contact key={index} name={contact.name}/>
 })
    return (
        <div onClick={props.selectContact}>
            {contacts}
        </div>
    )
    }


export default ContactsList;

