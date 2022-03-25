import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import View from "./View";
import "bootstrap/dist/css/bootstrap.min.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import { Card, Container, Navbar, Nav, Button } from "react-bootstrap/";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [allPosts, cAllPosts] = useState([
    {
      id: 0,
      username: "Dave69",
      post: "This is the first post",
      likes: 1
    },
    {
      id: 1,
      username: "XXxx13375N!P£RZxxXX",
      post: "2ND POST",
      likes: 3
    },
    {
      id: 2,
      username: "Anon",
      post: "tHiRd PoSt",
      likes: 2
    },
  ]);

  const [userPost, cUserPost] = useState({
    username: "",
    post: "",
  });

  useEffect(() => {
    console.log("useEffect")
  }, []);

  return (
    <BrowserRouter>
      <Navbar bg="primary" expand="md">
        <Navbar.Brand>Social App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/Post">
              Create Post
            </Link>
            <Link className="nav-link" to="/View">
              Timeline
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route
          path="Post"
          element={<Post userPost={userPost} cUserPost={cUserPost} cAllPosts={cAllPosts} allPosts={allPosts}/>}
        />
        <Route
          path="/View"
          element={<View allPosts={allPosts} cAllPosts={cAllPosts} />}
        />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
