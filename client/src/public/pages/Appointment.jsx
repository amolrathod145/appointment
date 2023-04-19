import React from "react";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 offset-sm-4">
            <div className="card">
              <div className="card-header">
                <button type="button" class="btn btn-primary">
                  Online Appointment
                </button>
              </div>
              <div className="card-body">
                <div>
                  <label htmlFor="">
                    {" "}
                    Patient Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Patient Name: "
                  />
                </div>{" "}
                <br />
                <div className="d-flex gap-4">
                  <div>
                    <label htmlFor=""> Departments</label>
                    <select class="form-select">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor=""> Doctor</label>
                    <select class="form-select">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>{" "}
                <div className="d-flex gap-4 mt-3">
                  <div>
                    <label htmlFor="">
                      {" "}
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email:"
                    />
                  </div>
                  <div>
                    <label htmlFor="">
                      {" "}
                      Your Phome <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Phome:"
                    />
                  </div>
                </div>
                <div className="d-flex gap-4 mt-3">
                  <div>
                    <label htmlFor=""> Date:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Select Data:"
                    />
                  </div>
                  <div>
                    <label htmlFor=""> Time:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="03:30 PM"
                    />
                  </div>
                </div>
                <div>
                  <label for="id" class="form-label">
                    Comments <span className="text-danger">*</span>
                  </label>
                  <textarea
                    class="form-control"
                    id="id"
                    placeholder="Your Message:"
                  ></textarea>
                </div>
                <button type="button" class="btn btn-primary mt-3 w-100">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
