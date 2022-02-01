import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useHistory } from "react-router";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const validation = Yup.object().shape({
  FirstName: Yup.string().required("First Name Is Required"),
  LastName: Yup.string().required("Last Name Is Required"),
  Email: Yup.string().email("Invalid Email").required("Email is required"),
  Password: Yup.string()
    .required("Password is Required")
    .min(5, "Can't be smaller than 5 characters"),
});

function UpdateDatabase({ handleChange, data }) {
  const { id } = useParams();
  const [applicant, setApplicant] = useState([]);
  console.log(id);
  useEffect(() => {
    const data = axios
      .get(`http://localhost:9000/app/userdata/${id}`)
      .then((response) => {
        console.log(response);
        setApplicant(response.data);

        console.log(applicant);
      });
    return () => {};
  }, []);

  const history = useHistory();
  console.log("Applicant:", applicant);
  return (
    <div>
      <img
        src="Leads.png"
        alt=""
        style={{ width: "300px", marginLeft: "650px", marginBottom: "-120px " }}
      />
      <Formik
        initialValues={{
          FirstName: "",
          LastName: "",
          Email: "",
          Password: "",
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          console.log("FORM VALUES:", values);
          axios
            .put(`http://localhost:9000/app/userdata/${id}`, values)
            .then((response) => console.log(response.data));
          // window.location.reload();
        }}
      >
        <Form>
          <div
            className="container"
            style={{
              marginTop: "150px",
              width: "300px",
              border: "2px solid black",
            }}
          >
            <TextField label="First Name" name="FirstName" type="text" />
            <TextField label="Last Name" name="LastName" type="text" />
            <TextField label="Email" name="Email" type="text" />
            <TextField label="Password" name="Password" type="text" />
            <button
              style={{
                marginLeft: "65px",
                width: "150px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              className="btn btn-primary"
              type="submit"
              onClick={() => {
                setTimeout(() => history.push("/Database"), 3000);
              }}
            >
              UPDATE
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default UpdateDatabase;
