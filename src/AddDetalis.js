import React, { useState } from 'react';

const AddressBookManager = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addContact = () => {
    const isDuplicate = contacts.some(contact => contact.mobileNumber === mobileNumber);
    if (isDuplicate) {
      alert('Duplicate mobile number. Please enter a unique mobile number.');
      return;
    }

    const newContact = { name, mobileNumber };
    setContacts([...contacts, newContact]);
    setName('');
    setMobileNumber('');
  };

  const deleteContact = mobileNumber => {
    const updatedContacts = contacts.filter(contact => contact.mobileNumber !== mobileNumber);
    setContacts(updatedContacts);
  };

  const editContact = mobileNumber => {
    const contact = contacts.find(contact => contact.mobileNumber === mobileNumber);
    if (contact) {
      setName(contact.name);
      setMobileNumber(contact.mobileNumber);
    }
  };

  const updateContact = () => {
    const updatedContacts = contacts.map(contact => {
      if (contact.mobileNumber === mobileNumber) {
        return { ...contact, name, mobileNumber };
      }
      return contact;
    });
    setContacts(updatedContacts);
    setName('');
    setMobileNumber('');
  };

  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <div>
      <h1>Address Book Manager</h1>

      {/* Add Contact */}
      <h2>Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={e => setMobileNumber(e.target.value)}
      />
      <button onClick={addContact}>Add</button>

      {/* View Contacts */}
      <h2>Contacts</h2>
      <input
        type="text"
        placeholder="Filter by Name"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {filterContacts().map(contact => (
          <li key={contact.mobileNumber}>
            {contact.name} - {contact.mobileNumber}
            <button onClick={() => editContact(contact.mobileNumber)}>Edit</button>
            <button onClick={() => deleteContact(contact.mobileNumber)}>Delete</button>
          </li>
        ))}
      </ul>

       {/* Edit Contact  */}
      {mobileNumber && (
        <div>
          <h2>Edit Contact</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={e => setMobileNumber(e.target.value)}
          />
          <button onClick={updateContact}>Update</button>
        </div>
      )}
    </div>
  );
};

export default AddressBookManager;
