import React, { useState } from "react";

const htmlForm = () => {
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
        "https://task-c0671-default-rtdb.firebaseio.com/htmlForm.json",
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
        alert("htmlForm Submitted Successfully.");
      }
    } else {
      alert("Please fill all Input fields.");
    }
  };

  return (
    <div className="mt-10 sm:mt-10 w-screen mx-auto flex justify-center">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={changeHandler}
                      id="name"
                      autocomplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="profession"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Profession
                    </label>
                    <input
                      type="text"
                      name="profession"
                      id="profession"
                      value={user.profession}
                      onChange={changeHandler}
                      autocomplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={user.email}
                      onChange={changeHandler}
                      autocomplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      id="country"
                      name="country"
                      value={user.city}
                      onChange={changeHandler}
                      autocomplete="country-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      name="dob"
                      id="dob"
                      value={user.dob}
                      onChange={changeHandler}
                      autocomplete="address-level2"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      value={user.phone}
                      onChange={changeHandler}
                      autocomplete="address-level1"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Profile Photo
                    </label>
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      value={user.dob}
                      onChange={changeHandler}
                      autocomplete="postal-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  onClick={submitHandler}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default htmlForm;
