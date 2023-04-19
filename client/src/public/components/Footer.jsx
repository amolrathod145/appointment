import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinkArray = [
    { title: "About Us", to: "/" },
    { title: "Services", to: "/" },
    { title: "Teams", to: "/" },
    { title: " Project", to: "/" },
    { title: "Blog", to: "/" },
    { title: "Login", to: "/login" },
  ];
  const companyLinkContent = companyLinkArray.map((item) => (
    <Link to={item.to} className="nav-link">
      <span>&gt;</span> <span className="ms-2">{item.title}</span>
    </Link>
  ));
  const departmentLinkArray = [
    { title: " Eye Care", to: "/" },
    { title: " Psychotherapy", to: "/" },
    { title: "Dental Care", to: "/" },
    { title: "Orthopedic", to: "/" },
    { title: " Cardiology", to: "/" },
    { title: "Gynecology", to: "/" },
    { title: "Neurology", to: "/" },
  ];
  const departmentLinkContent = departmentLinkArray.map((item) => (
    <Link to={item.to} className="nav-link">
      <span>&gt;</span> <span className="ms-2">{item.title}</span>
    </Link>
  ));

  const contactContent = (
    <>
      <p>
        {" "}
        <Link to="/" className="nav-link">
          {" "}
          <span className="me-2 bi bi-envelope"></span> contact@example.com
        </Link>
      </p>
      <p>
        {" "}
        <Link to="/" className="nav-link">
          {" "}
          <span className="me-2 bi bi-phone"></span> +152 534-468-854
        </Link>
      </p>
      <p>
        <Link to="/" className="nav-link">
          {" "}
          <span className="me-2 bi bi-geo-alt"></span> View on Google map
        </Link>
      </p>
    </>
  );
  return (
    <>
      <div
        className="py-5 text-secondary"
        style={{ backgroundColor: "#202942" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img
                src="https://shreethemes.in/doctris/layouts/assets/images/logo-light.png"
                alt=""
              />
              <p className="my-4">
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-4">
                  <p className="fs-4 fw-bold text-light">Company</p>
                  {companyLinkContent}
                </div>
                <div className="col-sm-4">
                  <p className="fs-4 fw-bold text-light">Deparments</p>
                  {departmentLinkContent}
                </div>
                <div className="col-sm-4">
                  <p className="fs-4 fw-bold text-light">Contact Us</p>
                  {contactContent}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-5 d-flex justify-content-between">
            <p>
              2023 © Doctris. Design with{" "}
              <span className="bi bi-heart-fill text-danger mx-2"></span> by
              SKILLHUB.
            </p>
            <div className="d-flex gap-3">
              <Link to="/" className="nav-link">
                Teams
              </Link>
              <Link to="/" className="nav-link">
                Privacy
              </Link>
              <Link to="/" className="nav-link">
                About
              </Link>
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
