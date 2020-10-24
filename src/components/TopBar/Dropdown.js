import React, { useState } from "react";
import { FormControl, Dropdown } from "react-bootstrap";
import styled from "styled-components";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
  href=""
  ref={ref}
  onClick={(e) => {
    e.preventDefault();
    onClick(e);
  }}
  >
      {children}
      &#x25bc;
    </a>
  ));
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
      
      return (
        <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
        >
        <FormControl
        autoFocus
        className="mx-3 my-2 w-auto"
        placeholder="Type to filter..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        />
        <ul className="list-unstyled">
        {React.Children.toArray(children).filter(
          (child) =>
          !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
    </div>
    );
  },
  );
  const SpanStyled = styled.span({
  color: 'white',
  })
  const DropdownMenu = () => {
    // const classes = useStyles();
    return (
      <Dropdown>
            <Dropdown.Toggle as={CustomToggle}  >
             <SpanStyled>
              Choose Source
            </SpanStyled>
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1" active>BD Tools</Dropdown.Item>
            <Dropdown.Item eventKey="2">--- </Dropdown.Item>
            <Dropdown.Item eventKey="3" >
                ---
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">---</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        );
}
export default DropdownMenu;