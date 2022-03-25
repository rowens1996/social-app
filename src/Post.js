import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap/";

function Post(props) {
  const updateUserPost = (event) => {
    event.preventDefault();
    props.cUserPost({
      id: props.allPosts.length,
      username: document.getElementById("postUsername").value,
      post: document.getElementById("postBody").value,
      likes: 0,
    });
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    e.persist();
    let newPost = props.userPost;
    console.log(newPost);
    let timeLine = props.allPosts;
    timeLine.push(newPost);
    console.log(timeLine);
    props.cAllPosts(timeLine);
    navigate(`/View`)
  };

  return (
    <div>
      <Container>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group controlId="postUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              value={props?.username}
              onChange={(event) => updateUserPost(event)}
            />
          </Form.Group>

          <Form.Group controlId="postBody">
            <Form.Label>Post</Form.Label>
            <Form.Control
              name="post"
              as="textarea"
              rows={5}
              value={props?.post}
              onChange={(event) => updateUserPost(event)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default Post;
