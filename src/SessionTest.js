import React, { useEffect, useState } from "react";

function SessionTest() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const storedData = sessionStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = () => {
    event.preventDefault();
    sessionStorage.setItem("formData", JSON.stringify(formData));
  };
  const InputOnChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <label>Name</label>
        <input type="text" name="name" onChange={InputOnChange()} />
        <label>Email</label>
        <input type="text" name="Email" onChange={InputOnChange()} />
      </form>
    </div>
  );
}

export default SessionTest;
