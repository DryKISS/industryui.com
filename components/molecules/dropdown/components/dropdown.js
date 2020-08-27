/**
 * Dropdown
 */

// React
import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { array, bool, node, string, func, number } from "prop-types";

// Style
import styled from "styled-components";

// UI
import { DropdownMenu, Icon } from "../../../";

export const Dropdown = memo(
  ({ caret, className, children, items, onChange, position, selectedIndex }) => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const [SelectedIndex, setSelectedIndex] = useState(selectedIndex ?? -1);
    const handleClickAway = event => {
      if (node.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    useEffect(() => {
      if (open) {
        document.addEventListener("mousedown", handleClickAway);
      } else {
        document.removeEventListener("mousedown", handleClickAway);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickAway);
      };
    }, [open]);
    const handleItemClick = useCallback((item, index) => {
      setSelectedIndex(index);
      onChange(item);
    }, []);
    return (
      <StyledDropdown className={className} ref={node}>
        <StyledToggle
          className={`${open ? "dropdown--active" : ""} dropdown--toggle`}
          onClick={() => setOpen(!open)}
        >
          {children}

          {caret && (
            <Icon
              aria-hidden="true"
              className="dropdown--caret"
              icon={position === "top" ? "carat-up" : "caret-down"}
              prefix="fas"
            />
          )}
        </StyledToggle>

        {open && (
          <DropdownMenu
            closeDropdown={() => setOpen(false)}
            items={items}
            selectedIndex={SelectedIndex}
            position={position}
            onItemClick={handleItemClick}
          />
        )}
      </StyledDropdown>
    );
  },
  ({ items: prevItems }, { items: nextItems }) => {
    return nextItems && prevItems.length === nextItems.length;
  }
);

const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledToggle = styled.div`
  color: ${({ theme }) => theme.NAVBAR.colourActive};
  cursor: pointer;
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
`;

Dropdown.propTypes = {
  caret: bool,
  children: node.isRequired,
  className: string,
  items: array.isRequired,
  onChange: func,
  selectedIndex: number,
  position: string
};

Dropdown.defaultProps = {
  caret: true,
  position: "left"
};
