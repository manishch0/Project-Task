import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Input, Table } from "antd";

const Loginm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userData, setUserData] = useState([]);
  const [sendData, setSendData] = useState("");
  console.log(sendData);

  console.log(userData);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3200/", {
        name,
        phone,
        password,
      });

      if (response.status === 200) {
        setSendData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log("name", name);
    axios.get(`http://localhost:3200`).then((data) => {
      console.log(data, "useEfeect call");
      setUserData(data.data);
    });
  }, []);
  const columns = [
    {
      key: "name",
      title: "name",
      dataIndex: "name",
    },
    {
      key: "password",
      title: "Password",
      dataIndex: "password",
    },
    {
      key: "phone",
      title: "Phone",
      dataIndex: "phone",
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>pasword</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>phone</label>
        <input
          type="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="primary" htmlType="submit">
          Submit
        </button>
      </form>
      <div>
        <Table columns={columns} dataSource={userData} />
      </div>
    </>
  );
};

export default Loginm;
