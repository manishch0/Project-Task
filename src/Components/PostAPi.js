import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userData, setUserData] = useState([]);

  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3200/", {
        name,
        password,
        phone,
      });

      console.log(response.data, "fghjkhgh");

      console.log(name, "hererer herer");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("name", name);
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
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <Table columns={columns} dataSource={userData} />
      </div>
    </>
  );
};

export default LoginForm;
