import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
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
                <p className="fs-3">Sign In</p>
              </div>
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
              <div className="d-flex justify-content-between mt-3">
                <div className="form-check">
                  <input
                    type="ckeckbox"
                    className="form-check-input"
                    value=""
                    id="id"
                  />
                  <label htmlFor="" className="form-ckeck-label" for="id">
                    Remember Me
                  </label>
                </div>
                <Link to="/">Forget Password</Link>
              </div>{" "}
              <button type="button" class="btn btn-primary w-100 mt-3">
                Sign Up
              </button>
              <div className="d-flex justify-content-center">
                <p className="fs-5 mt-3">OR</p>
              </div>
              <button type="button" class="btn btn-outline-primary w-100 mt-2">
                Continue With Google
              </button>
              <p className="d-flex justify-content-center mt-3">
                Don't have an account ? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
