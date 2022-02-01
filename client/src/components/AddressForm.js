import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import pic4 from "../assets/bg2.jpg";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
export const AddressForm = () => {
  const validate = Yup.object({
    FullName: Yup.string().required("Full Name is Required"),
    Address: Yup.string().required("Address is Required"),
    Contact: Yup.string().required("Contact is required"),
    PostalCode: Yup.string().required("Postal Code is required"),
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
              FullName: "",
              Address: "",
              Contact: "",
              PostalCode: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              // const temp = [...values];
              // temp.push(values);
              console.log(values);
              axios
                .post("http://localhost:9000/app/AddressForm", values)
                .then((res) => {
                  console.log(res);
                });
            }}
          >
            {({ values }) => (
              <Form method="POST">
                <TextField label="Full Name" name="FullName" type="text" />
                <TextField label="Address" name="Address" type="text" />
                <TextField label="Contact" name="Contact" type="text" />
                <TextField label="Postal Code" name="PostalCode" type="text" />

                <button
                  className="btn btn-dark mt-3"
                  type="submit"
                  onClick={() => {
                    setTimeout(() => {
                      history.push("/Checkout");
                    }, 3000);
                  }}
                >
                  Place order
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
