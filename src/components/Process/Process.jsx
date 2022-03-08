import React, { useState } from "react";
import { Wrapper } from "./ProcessStyles";
import { Button } from "../../globalStyles";
import { processData } from "../../utils/processData";

const Process = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Wrapper className="black-background">
      <div className="container">
        <div className="tabs-wrapper">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Planning
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Design{" "}
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Development{" "}
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Testing{" "}
            </button>
            <button
              className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(5)}
            >
              Maintenance
            </button>
          </div>

          <div className="content-tabs">
            {processData.map((item, index) => {
              const { title, image, desc } = item;
              return (
                <div
                  key={index}
                  className={
                    toggleState === index
                      ? "content  active-content"
                      : "content"
                  }
                >
                  <div className="content-tabs-image">
                    <img src={image} />
                  </div>
                  <div className="content-tabs-item">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <Button className="alt alt-border-white">
                      <span>Get in touch</span>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Process;
