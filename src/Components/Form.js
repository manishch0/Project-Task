import React, { useEffect, useState, useRef } from "react";
import { Form, Input, Button, Table } from "antd";

function LearnForm() {
  const [data, setData] = useState([]);
  const [name, SetName] = useState("test term");
  const [phone, setPhone] = useState(9);
  const [modal, setModal] = useState(false);
  //   const [filterData, setFilterData] = useState("");

  const handleSubmit = () => {
    const duplicate = data.some((e) => e.phone === phone);
    if (duplicate) {
      alert("Please Enter the unique number");
      return;
    }
    const newData = { name, phone };
    setData([...data, newData]);
    setPhone("");
    SetName("");
  };

  const handleDelete = (i) => {
    const deleteData = data.filter((_, e) => e !== i);
    setData(deleteData);
  };

  const handleEdit = (i) => {
    const edit = data.find((e) => e === i);
    setModal(true);
    if (edit) {
      setPhone(edit.phone);
      SetName(edit.name);
    }
  };
  const handleUpdate = () => {
    const updateData = data.map((e) => {
      if (e.phone === phone) {
        return { ...e, name, phone };
      }
      return e;
    });
    setData(updateData);
    setPhone("");
    SetName("");
  };

//   const prevName = useRef("");

//   useEffect(() => {
//     prevName.current = name;
//   }, [name]);
  return (
    <div>
      <Form>
        <Form.Item label="Phone Number">
          <Input
            value={phone}
            // rule={[{ required: true, message: "Please Enter the number" }]}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="UserName">
          <Input
            value={name}
            rule={[{ required: true, Message: "Please Enter the User name" }]}
            onChange={(e) => SetName(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form.Item>
        <ul>
          {data.map((e, i) => (
            <li key={i}>
              {/* <Table dataSource={e.name} columns={e.phone} /> */}
              {e.name}
              {e.phone}
              <Button onClick={() => handleEdit(i)}>Edit</Button>
              <Button onClick={() => handleDelete(i)}>Delete</Button>
            </li>
          ))}
        </ul>
        {modal && (
          <div>
            <Form.Item label="UserName">
              <Input value={name} onChange={(e) => SetName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Phone">
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Item>

            <Button onClick={handleUpdate}>Update Data</Button>
          </div>
        )}
      </Form>
    </div>
  );
}

export default LearnForm;
