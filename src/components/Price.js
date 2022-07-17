import React from "react";
import { useState } from "react";

const Price = (props) => {
  const [val, setVal] = useState(16);
  const [toggle, setToggle] = useState(false);

  const MAX = 32;

  function handlechange(e) {
    setVal(e.target.value);
  }

  const getBackgroundSize = () => {
    return { backgroundSize: `${(val * 100) / MAX}% 100%` };
  };

  function toggler(e) {
    setVal(e.target.checked ? 144 : 16);
    setToggle(e.target.checked);
  }

  function click() {
    alert("Trial has been started");
  }

  return (
    <div className="parent">
      <div className="pattern">
        <p className="toggle-text">Light</p>
        <label className="toggle-switch">
          <input type="checkbox" onChange={props.togg} />
          <span className="sliderx round"></span>
        </label>
        <p className="toggle-text-dark">Dark</p>
      </div>

      <div className="bg-img">
        <div className="head">
          <p className="header">
            Simple, <span className="traffic-text">traffic-based </span>pricing
          </p>
          <p className="para">
            Sign-up for our 30 day trial. No credit card requried.
          </p>
        </div>
        <div className="box">
          <div className="boxes">
            <div className="main-box">
              <div>
                <p className="page">100k PAGEVIEWS</p>
              </div>
              <div>
                <p className="year">
                  <span className="price">${val}.00</span>&nbsp; /&nbsp;
                  {!toggle ? "month" : "year"}
                </p>
              </div>
            </div>
            <div>
              <input
                type="range"
                min="1"
                max={MAX}
                className="slider"
                id="myRange"
                value={val}
                onChange={handlechange}
                style={getBackgroundSize()}
              />
            </div>
            <div className="billing">
              <p className="bill">Monthly Billing</p>
              <label className="switch">
                <input type="checkbox" onChange={toggler} checked={toggle} />
                <span className="sliderx round"></span>
              </label>
              <p className="bill">Yearly Billing</p>
              <p className="disc">25% Discount</p>
              <p className="discount"> -25% </p>
            </div>
            <div className="line"></div>
            <div className="bottom-box">
              <div className="checks">
                <p>
                  <img
                    alt="check"
                    src="Images/icon-check.svg"
                    className="tick"
                  />
                  Unlimited websites
                </p>
                <p>
                  <img
                    alt="check"
                    src="Images/icon-check.svg"
                    className="tick"
                  />
                  100% data ownership
                </p>
                <p>
                  <img
                    alt="check"
                    src="Images/icon-check.svg"
                    className="tick"
                  />
                  Email reports
                </p>
              </div>
              <div className="button">
                <button onClick={click}>Start my trial</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
