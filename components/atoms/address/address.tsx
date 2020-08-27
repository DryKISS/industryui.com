/**
 * Address
 */

// React
import React from "react";

// Style
import styled from "styled-components";
import { IAddress } from "./types";

export const Address = (props: IAddress) => {
  const { county, country, line1, line2, line3, postcode, town } = props;

  return (
    <StyledAddress>
      <div>{line1}</div>
      {line2 && <div>{line2}</div>}
      {line3 && <div>{line3}</div>}
      <div>{town}</div>
      {county && <div>{county}</div>}
      <div>{postcode}</div>
      <div>{country}</div>
    </StyledAddress>
  );
};

const StyledAddress = styled.address`
  margin-bottom: 1rem;
`;
