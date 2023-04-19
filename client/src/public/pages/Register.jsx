import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 offset-sm-4">
            <div className="d-flex justify-content-center">
              <img
                src=" https://shreethemes.in/doctris/layouts/assets/images/logo-dark.png"
                alt=""
              />
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <div className="d-flex justify-content-center ">
                  <p className="fs-3">Sign UP</p>
                </div>
                <div className="d-flex gap-4">
                  <div>
                    <label htmlFor="">
                      {" "}
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="">
                      {" "}
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>{" "}
                <br />
                <div>
                  <label htmlFor="">
                    {" "}
                    Your Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>{" "}
                <br />
                <div>
                  <label htmlFor="">
                    {" "}
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <div className="form-check mt-3">
                  <input
                    type="ckeckbox"
                    className="form-check-input"
                    value=""
                    id="id"
                  />
                  <label htmlFor="" className="form-ckeck-label" for="id">
                    I Accept Terms And Condition
                  </label>
                </div>{" "}
                <button type="button" class="btn btn-primary w-100 mt-3">
                  Sign Up
                </button>
                <div className="d-flex justify-content-center">
                  <p className="fs-5 mt-3">OR</p>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-primary w-100 mt-2"
                >
                  Continue With Google
                </button>
                <p className="mt-3">
                  Already have an account ? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
