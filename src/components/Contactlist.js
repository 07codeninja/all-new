import React from "react";
import ContactCard from "./ContactCard";


const Contactlist = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }; 
    const renderContactlist = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>;
    });
    return <div className="ui celled list">{renderContactlist}</div>
    };

export default Contactlist;