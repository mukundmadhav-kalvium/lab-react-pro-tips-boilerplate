import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  //state to check if form is submitted or not
  const [formSubmit, setFormSubmit] = useState(false);
  
  //state to store all errors
  const [formError, setFormError] = useState({});
  
  //state to store all form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  //function to handle input data
  const inputHandler = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //function to submit form
  const submitHandler = (e) => {
    e.preventDefault();

    let errors = validate(formData);
    setFormError(errors);

    let errorKeyArray = Object.keys(errors);

    if (errorKeyArray.length == 0) {
      toastifyFun();
      setFormSubmit(true);
    }
  };

  //function to validate data
  const validate = (data) => {
    let error = {};

    if (data.firstName.trim() == "") {
      error.firstName = "Please enter your First Name!";
      toast.error('Please enter your First Name!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      }
      if (data.lastName.trim() == "") {
        error.lastName = "Please enter your Last Name!";
        toast.error('Please enter your Last Name!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        }
        if (!emailRegex.test(data.email.trim())) {
          error.email = "Please enter a valid email address!";
            toast.error('Please enter a valid email address!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            }
            if (data.phone.trim().length != 10) {
              error.phone = "Please enter a valid phone number!";
                toast.error('Please enter a valid phone number!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
            }
    return error;
  };

  //toastify function to show registration successful
  const toastifyFun = () =>
    toast.success("Registration Successful!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });


  return (
    <div className="form-container">
      <fieldset>
        <legend>Registration Form</legend>
        <form onSubmit={submitHandler}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={inputHandler}
          />
          {formError.firstName && (
            <p className="error">{formError.firstName}</p>
          )}

          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={inputHandler}
          />
          {formError.lastName && <p className="error">{formError.lastName}</p>}

          <label>Phone Number:</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            onChange={inputHandler}
          />
          {formError.phone && <p className="error">{formError.phone}</p>}

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={inputHandler}
          />
          {formError.email && <p className="error">{formError.email}</p>}

          <input type="submit" value={"Register"} onClick={submitHandler} />
        </form>
      </fieldset>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;