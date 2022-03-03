import React, { useState } from "react";
import { Wrapper } from "./ProcessStyles";
import { Container } from "../../globalStyles";
import { processData } from "../../utils/processData";

const Process = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Our process</h1>
      </Container>
      {/* buttons */}
      <div className="wrapper black-background">
        {processData.map((el, index) => (
          <div className="container" key={index}>
            <img src={el.image} alt={el.title} />
            <div>
              <h3 className="title">{el.title}</h3>
              <p>{el.desc}</p>
            </div>
            <buttons>contact us</buttons>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Process;
