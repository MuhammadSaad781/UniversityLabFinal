import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
function Database() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await Axios.get("http://localhost:9000/app/userdata");
    setUser(response.data);
  };
  const handleDelete = (id) => {
    //alert(id);
    Axios.delete(`http://localhost:9000/app/userdata/${id}`)
      .then((res) => {
        getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   console.log(user);
  return (
    <div>
      {/* {user.map((u) => { */}
      <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Email</th>
              <th scope="col">CRUD</th>
            </tr>
          </thead>
          <tbody>
            {user.map((details) => (
              <tr>
                <td>{details.FirstName}</td>
                <td>{details.Email}</td>
                <td>
                  <Link to={`/userdata/${details._id}`}>
                    <button className="btn btn-outline-info">Update</button>
                  </Link>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(details._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* })} */}
    </div>
  );
}

export default Database;
