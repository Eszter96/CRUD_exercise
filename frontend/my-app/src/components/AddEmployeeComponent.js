import React from "react";
import { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailID, setEmailID] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, emailID };

    EmployeeService.createEmployee(employee)
      .then((response) => {
        console.log(response.data);
        navigate("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    EmployeeService.getEmployeeByID(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmailID(response.data.emailID);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center"> Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email:</label>
                  <input
                    type="text"
                    placeholder="Enter email"
                    name="emailID"
                    className="form-control"
                    value={emailID}
                    onChange={(e) => setEmailID(e.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveEmployee(e)}
                >
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
