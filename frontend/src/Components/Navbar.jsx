import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrent } from "../redux/Action";


function NavBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCurrent());
  }, [dispatch]);

  const User = useSelector((state) => state.user);
  console.log(User);
  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
