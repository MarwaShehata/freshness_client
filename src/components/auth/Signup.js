import React ,{useState} from "react";
import styles from './Signup.module.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
const Signup = () => {
  const basicSchema = Yup.object().shape({
    firstName: Yup.string().min(3).max(6).required("Required"),
    lastName: Yup.string().max(5).required("Required"),
    userName: Yup.string().min(5).max(10).required("Required"),
    email: Yup.string()
      .email("Please Enter  a valid email")
      .required("Required"),
    password: Yup.string()
      .min(5)
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {
        message: "Please create a stronger password",
      })
      .required("Required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("Required"),
  });
  const onSubmit = (values,actions) => {
    console.log(values);
    axios.post('http://localhost:4000/users/signup', values)
    .then(function (response) {
      console.log(response);
      actions.resetForm()
    })
    .catch(function (error) {
      console.log(error.response.data.message);
    });
  };
  const { values,errors,touched,handleBlur,isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: basicSchema,
    onSubmit
  });
  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* FIRST NAME */}
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={values.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Enter First Name"
            onBlur={handleBlur} 
            className= { `${styles.input_style} ${errors.firstName&&touched.firstName ? `${styles.input_error}` : ""}`}
            
          />
          {errors.firstName && touched.firstName && <div  className={`${styles.error_field} text-center mt-1`}><small>{errors.firstName}</small></div>}
         
        </Form.Group>
        {/* LAST NAME */}
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={values.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Enter Last Name"
            onBlur={handleBlur} 
            className= { `${styles.input_style} ${errors.lastName&&touched.lastName ? `${styles.input_error}` : ""}`}
          />
          {errors.lastName && touched.lastName && <div  className={`${styles.error_field} text-center mt-1`}><small>{errors.lastName}</small></div>}
        </Form.Group>
        {/* USER NAME */}
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            value={values.userName}
            onChange={handleChange}
            type="text"
            placeholder="Enter User Name"
            onBlur={handleBlur} 
            className= { `${styles.input_style} ${errors.userName&&touched.userName ? `${styles.input_error}` : ""}`}
          />
          {errors.userName && touched.userName && <div  className={`${styles.error_field} text-center mt-1`}><small>{errors.userName}</small></div>}
        </Form.Group>
        {/* EMAIL */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={values.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
            onBlur={handleBlur} 
            className= { `${styles.input_style} ${errors.email&&touched.email ? `${styles.input_error}` : ""}`}
          />
          {errors.email && touched.email && <div  className={`${styles.error_field} text-center mt-1`}><small>{errors.email}</small></div>}
        </Form.Group>
        {/* PASSWORD */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={values.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            onBlur={handleBlur} 
            className= { `${styles.input_style} ${errors.password&&touched.password ? `${styles.input_error}` : ""}`}
          />
          {errors.password && touched.password && <div  className={`${styles.error_field} text-center mt-1`}><small>{errors.password}</small></div>}
        </Form.Group>
        {/* PASSWORD CONFIRM */}
        <Form.Group className="mb-3" controlId="passwordConfirm">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control
            value={values.passwordConfirm}
            onChange={handleChange}
            type="password"
            placeholder="Password Confirm"
            onBlur={handleBlur} 
            className= { `${styles.input_style} ${errors.passwordConfirm&&touched.passwordConfirm ? `${styles.input_error}` : ""}`}
          />
          {errors.passwordConfirm && touched.passwordConfirm && <div  className={`${styles.error_field} text-center mt-1`}><small>{errors.passwordConfirm}</small></div>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Signup;
