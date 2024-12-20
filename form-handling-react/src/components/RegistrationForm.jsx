import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username) {
      setErrors("username required.");
      return;
    };
    if (!email) {
      setErrors("Email are required.");
      return;
    };
    if (!password) {
      setErrors("Password required.");
      return;
    }
    setErrors("");
    console.log("Form Submitted", { username, email, password });

    // Simulate API call
    alert("User registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
