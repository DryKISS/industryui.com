/**
 * Accordion Item
 */

// React
import React, { memo } from "react";
import { bool, oneOf, string, func, number } from "prop-types";

// UI
import { CONTEXT } from "../../../";
import { Icon } from "../../../atoms/icon";

// Styled
import styled from "styled-components";

export const AccordionItem = memo(
  ({ children, className, context, handleOpen, index, open, title }) => {
    return (
      <StyledAccordionItem className={className}>
        <Header
          className={open ? "opened" : "closed"}
          onClick={() => handleOpen(index)}
          context={context || "dark"}
        >
          {title}{" "}
          <HeaderIcon
            aria-hidden="true"
            context="white"
            icon={open ? "chevron-up" : "chevron-down"}
          />
        </Header>
        <Content className={open ? "opened" : "closed"}>{children}</Content>
      </StyledAccordionItem>
    );
  },
  (
    { open: prevOpenState, context: prevContext },
    { open: nextOpenState, context: nextContext }
  ) => {
    return prevOpenState === nextOpenState && prevContext === nextContext;
  }
);

const StyledAccordionItem = styled.div`
  &:last-child header.closed {
    border: 0;
  }
`;

const Header = styled.header`
  background-color: ${({ context, theme }) => theme.COLOUR[context]};
  border-bottom: 1px solid ${(props) => props.theme.COLOUR[props.context]};
  color: ${({ context, theme }) =>
    context === "white" ? theme.COLOUR.primary : theme.COLOUR.white};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
`;

const HeaderIcon = styled(Icon)`
  float: right;
`;

const Content = styled.div`
  box-sizing: border-box;
  max-height: 0;
  overflow: hidden;
  &.opened {
    max-height: fit-content;
    padding: 1.25rem;
  }
`;

AccordionItem.propTypes = {
  children: string.isRequired,
  className: string,
  context: oneOf(Object.values(CONTEXT)),
  handleOpen: func,
  index: number,
  open: bool,
  title: string.isRequired,
};

AccordionItem.default = {
  context: "dark",
  open: false,
};
