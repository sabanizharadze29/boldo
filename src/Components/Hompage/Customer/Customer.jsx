import React, { useRef } from "react";
import "./customer.css";
import { CSSTransition } from "react-transition-group";
import DropdownIcon from "../../../assets/dropdownIcon.png";
import customerImg from "../../../assets/customerBg.png";
import { useState } from "react";

const Customer = () => {
  const [show, setShow] = useState({
    firstToggle: false,
    secondToggle: false,
  });
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);
  function clickHandler(e) {
    const name = e.target.className;

    setShow((prev) => ({
      ...prev,
      [name]: !show[name],
    }));
  }
  return (
    <div className="customer container-fluid">
      <div className="container customer-container ">
        <img src={customerImg} alt="" />
        <div className="customer-body">
          <h3 className="secondary-font">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div className="customer-btns">
            <div className="customer-btn-wrapper">
              <CSSTransition
                nodeRef={nodeRef1}
                in={show.firstToggle}
                classNames="active"
                timeout={200}
              >
                <div ref={nodeRef1} className="customer-btn">
                  <h1>We connect our customers with the best?</h1>
                  <img
                    className="firstToggle"
                    onClick={clickHandler}
                    src={DropdownIcon}
                    alt=""
                  />
                </div>
              </CSSTransition>
              {
                <p className="customer-toggle-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam reiciendis, tempora voluptate blanditiis temporibus
                  nisi harum omnis dicta error velit?
                </p>
              }
            </div>
            <div className="customer-btn-wrapper">
              <CSSTransition
                nodeRef={nodeRef2}
                in={show.secondToggle}
                timeout={0}
                classNames="active"
              >
                <div ref={nodeRef2} className="customer-btn">
                  <h1>Android research & development rockstar?</h1>
                  <img
                    className="secondToggle"
                    onClick={clickHandler}
                    src={DropdownIcon}
                    alt=""
                  />
                </div>
              </CSSTransition>

              {
                <p className="customer-toggle-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam reiciendis, tempora voluptate blanditiis temporibus
                  nisi harum omnis dicta error velit?
                </p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
