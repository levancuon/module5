import React, { useState } from "react";
import "./App.css";
import { Formik } from "formik";

export default function App() {
  //***************Validate bình thường**************************

  // const MESSAGE_ERROR = {
  //   email: "Email error",
  //   password: "Password error"
  // };
  //
  // const REGEX = {
  //   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  //   password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  // };
  //
  // const [form, setForm] = useState({});
  //
  // function handleChange(event) {
  //   let error = REGEX[event.target.name].test(event.target.value)
  //       ? ""
  //       : MESSAGE_ERROR[event.target.name];
  //   setForm({
  //     ...form,
  //     [event.target.name]: { value: event.target.value, error: error }
  //   });
  // }
  //
  // function handleSubmit() {
  //   const isFilled =
  //       form.email && form.email.value && form.password && form.password.value;
  //   const isError = isFilled && (form.email.error || form.password.error);
  //   alert(
  //       isFilled && !isError
  //           ? "Login in successfully!!!"
  //           : "Please fill out all the fields!!!"
  //   );
  // }
  //
  // return (
  //     <div>
  //       <h1>Login</h1>
  //       <form>
  //         <div
  //             className={`custom-input ${form.email &&
  //             form.email.error &&
  //             "custom-input-error"}`}
  //         >
  //           <label>Email </label>
  //           <input
  //               name="email"
  //               value={(form.email && form.email.value) || ""}
  //               onChange={handleChange}
  //           />
  //           {form.email && form.email.error && (
  //               <p className="error">Email error</p>
  //           )}
  //         </div>
  //         <div
  //             className={`custom-input ${form.password &&
  //             form.password.error &&
  //             "custom-input-error"}`}
  //         >
  //           <label>Password </label>
  //           <input
  //               type="password"
  //               name="password"
  //               value={(form.password && form.password.value) || ""}
  //               onChange={handleChange}
  //           />
  //           {form.password && form.password.error && (
  //               <p className="error">Password error</p>
  //           )}
  //         </div>
  //         <button type="button" onClick={handleSubmit}>
  //           Submit
  //         </button>
  //       </form>
  //     </div>
  // );

    //***********************Validate có formik**************************
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
            console.log("code");
        }
        if (!form.password) {
            errors.password = "Required";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Login in successfully!!!");
    }

    return (
        <div>
            <h1>Sign up</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${
                                errors.email ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>
                        <div
                            className={`custom-input ${
                                errors.password ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.password}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}