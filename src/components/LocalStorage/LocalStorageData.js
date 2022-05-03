import React, { useState, useEffect } from "react";

const LocalStorageData = () => {
  //get the data from localStorage
  const getValues = () => {
    const data = localStorage.getItem("values");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };
  const [values, setValues] = useState(getValues());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = {
      name,
      email,
      mobileNumber,
    };
    setValues([...values, value]);
    setName("");
    setEmail("");
    setMobileNumber("");
  };

  // set the data in localStorage
  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  const deleteValue = (mNum) => {
    console.log("deleteValue", mNum);
    const filteredValue = values.filter((value, index) => {
      return value.mobileNumber !== mNum;
    });
    setValues(filteredValue);
  };

  return (
    <div>
      <h1>Local Storage</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <label>Mobile:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {values.length > 0 && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>MobileNumber</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {values.map((val, index) => {
                  return (
                    <tr key={index}>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.mobileNumber}</td>
                      <td>
                        <button
                          type="delete"
                          onClick={() => deleteValue(val.mobileNumber)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        {values.length < 1 && <h3>No values found</h3>}
      </div>
    </div>
  );
};

export default LocalStorageData;