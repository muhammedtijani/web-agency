import React, { useState, useEffect } from "react";
import Wrapper from "./count.js";

import Odometer from "react-odometerjs";

const Count = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(10);
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);
  return (
    <Wrapper>
      <div className="container">
        <div className="home-count-item">
          <div className="holder">
            <p className="number">
              <Odometer value={value} format="(,dd)" />+
            </p>
            <p>Years in the business</p>
          </div>
        </div>
        <div className="home-count-item">
          <div className="holder">
            <p className="number">
              <Odometer value={value} format="(,dd)" />+
            </p>
            <p>Years in the business</p>
          </div>
        </div>
        <div className="home-count-item">
          <div className="holder">
            <p className="number">
              <Odometer value={value} format="(,dd)" />+
            </p>
            <p>Years in the business</p>
          </div>
        </div>
        <div className="home-count-item">
          <div className="holder">
            <p className="number">
              <Odometer value={value} format="(,dd)" />+
            </p>
            <p>Years in the business</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Count;
