import { Formik, Form } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import axios from "axios";
import pic4 from "../assets/bg2.jpg";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
export const Registration = () => {
  const validate = Yup.object({
    FirstName: Yup.string().required("First Name is Required"),
    LastName: Yup.string().required("Last Name is Required"),
    Email: Yup.string().required("Email is required"),
    Password: Yup.string().required("Password is required"),
  });
  const history = useHistory();
  return (
    <>
      <NavBar />
      <div className="container col-3">
        <img className="d-block w-100 h-50" src={pic4} />
        <div>
          <Formik
            initialValues={{
              FirstName: "",
              LastName: "",
              Email: "",
              Password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              // const temp = [...values];
              // temp.push(values);
              console.log(values);
              axios
                .post("http://localhost:9000/app/Registration", values)
                .then((res) => {
                  console.log(res);
                });
            }}
          >
            {({ values }) => (
              <Form method="POST">
                <TextField label="First Name" name="FirstName" type="text" />
                <TextField label="Last Name" name="LastName" type="text" />
                <TextField label="Email" name="Email" type="text" />
                <TextField label="Password" name="Password" type="text" />

                <button className="btn btn-dark mt-3" type="submit">
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Registration;
