import React from 'react';
import ContactName from './ContactName';

let temp;

function getFirstLetter(value) {
  return value.charAt(0).toLowerCase();
}

function renderTitle(firstLetter) {
  if (temp !== firstLetter) {
    temp = firstLetter;
    return (
      <div className="uk-margin">
        <a href={'#' + firstLetter} id={firstLetter} className="uk-nav-header">{firstLetter}</a>
      </div>
    )
  }
}

const Contact = (props) => {
  const sortedContactList = props.contacts.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <ul className="uk-nav uk-nav-default tm-nav uk-list-divider">

      {
        sortedContactList.map((contact, index) => {
          const firstLetter = getFirstLetter(contact.name)
          return (
            <React.Fragment key={index}>
              {renderTitle(firstLetter)}
              <ContactName name={contact.name} id={contact.id} />
            </React.Fragment>)
        })

      }

    </ul>
  )
}

export default Contact;