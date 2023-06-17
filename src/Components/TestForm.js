import React, { useState } from "react";
import { Input, Button, Form,List } from "antd";

const TestForm = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addContact = () => {
    const isDuplicate = contacts.some(
      (contact) => contact.mobileNumber === mobileNumber
    );
    if (isDuplicate) {
      alert("Duplicate mobile number. Please enter a unique mobile number.");
      return;
    }

    const newContact = { name, mobileNumber };
    setContacts([...contacts, newContact]);
    setName("");
    setMobileNumber("");
  };

  const deleteContact = (mobileNumber) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.mobileNumber !== mobileNumber
    );
    setContacts(updatedContacts);
  };

  const editContact = (mobileNumber) => {
    const contact = contacts.find(
      (contact) => contact.mobileNumber === mobileNumber
    );
    if (contact) {
      setName(contact.name);
      setMobileNumber(contact.mobileNumber);
    }
  };

  const updateContact = () => {
    const updatedContacts = contacts.map((contact) => {
      if (contact.mobileNumber === mobileNumber) {
        return { ...contact, name, mobileNumber };
      }
      return contact;
    });
    setContacts(updatedContacts);
    setName("");
    setMobileNumber("");
  };

  const filterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Test data</h1>

      {/* Add Contact */}
      <h2>Add Contact</h2>
      <Form>
        <Form.Item label="Name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Input
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={addContact}>Add</Button>
        </Form.Item>

        {/* View Contacts */}
        <h2>Contacts</h2>
        <Input
          type="text"
          placeholder="Filter by Name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {filterContacts().map((contact) => (
            <List key={contact.mobileNumber}>
              {contact.name} - {contact.mobileNumber}
              <Button onClick={() => editContact(contact.mobileNumber)}>
                Edit
              </Button>
              <Button onClick={() => deleteContact(contact.mobileNumber)}>
                Delete
              </Button>
            </List>
          ))}
        </ul>

        {/* Edit Contact  */}
        {mobileNumber && (
          <div>
            <h2>Edit Contact</h2>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <Button onClick={updateContact}>Update</Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default TestForm;
