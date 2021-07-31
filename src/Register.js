import React, { useState } from "react";

const initialState = {
  username: "",
  email: "",
  password: "",
};

export default function Register() {
  const [form, setForm] = useState(initialState);
  const [formdata, setFormdata] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm(initialState);
    setFormdata(form);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          // alignItems: "center",
          // justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>
      {formdata && JSON.stringify(formdata)}
    </div>
  );
}
