import React, { useState } from "react";

const Form = () => {
  const [user, setuser] = useState({
    name: "",
    profession: "",
    dob: "",
    city: "",
    email: "",
    phone: "",
    image: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, profession, dob, city, email, phone, image } = user;

    if (name && profession && dob && city && email && phone && image) {
      setuser({
        name: "",
        profession: "",
        dob: "",
        city: "",
        email: "",
        phone: "",
        image: "",
      });

      const resp = await fetch(
        "https://task-c0671-default-rtdb.firebaseio.com/form.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            profession,
            dob,
            city,
            email,
            phone,
            image,
          }),
        }
      );

      if (resp) {
        alert("Form Submitted Successfully.");
      }
    } else {
      alert("Please Input all fields.");
    }
  };

  return (
    <div className="form_component">
      <h1>Fill the Form</h1>
      <form onSubmit={submitHandler} method="POST">
        <div className="input_fields">
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label htmlFor="profession">Profession :</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={user.profession}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label htmlFor="dob">Date of Birth :</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={user.dob}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label htmlFor="city">City :</label>
            <input
              type="text"
              id="city"
              name="city"
              value={user.city}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="eamil"
              name="email"
              value={user.email}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              onChange={changeHandler}
              value={user.phone}
              required
            />
          </div>
          <input
            type="file"
            id="image"
            name="image"
            onChange={changeHandler}
            value={user.image}
            required
          />
        </div>
        <input type="submit" className="submit_btn" />
      </form>
    </div>
  );
};

export default Form;
