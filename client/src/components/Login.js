import { Formik, Form } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";

export const Registration = () => {
  const validate = Yup.object({
    FirstName: Yup.string().required("First Name is Required"),
    LastName: Yup.string().required("Last Name is Required"),
    Email: Yup.string().required("Email is required"),
    Password: Yup.string().required("Password is required"),
  });
  return (
    <div className="container col-3">
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
            const temp = [...values];
            temp.push(values);
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <TextField label="Email" name="Email" type="text" />
              <TextField label="Password" name="Password" type="text" />
              <button className="btn btn-dark mt-3" type="submit">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
