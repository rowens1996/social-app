import "./App.css";
import "./App.js";
import Button from "react-bootstrap/Button";

import { Card, Container } from "react-bootstrap/";
import { useState, useEffect } from "react";
import App from "./App.js";
import { renderMatches } from "react-router-dom";

function View(props) {
  const [current, cCurrent]=useState({})
  
  const likeCount = (iD) => {
    document.getElementById(`likeButton${iD}`).disabled = true;
    console.log("like clicked");
    let newArr = props.allPosts;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].id === iD) {
        newArr[i].likes++;
      }
    }
    props.cAllPosts(newArr);
    console.log(props.allPosts[iD].likes)
  };

  const buildAllPosts = () => {
    console.log("building timeline");
    if (!props.allPosts) {
      console.log("posts undefined");
      return <></>;
    }
    console.log("posts builing");
    console.log("mapping posts", props.allPosts);
    return props.allPosts.map((item) => {
      return (
        <Container key={item.id} className="cardContainer">
          <Card className="postCard">
            <Card.Header>
              User: {item.username} Post ID: {item.id + 1}
            </Card.Header>
            <Card.Body>
              <Card.Text className="postText">{item.post}</Card.Text>
            </Card.Body>
          </Card>
          <span>
            <Button disabled={false} id={`likeButton${item.id}`} type="submit" onClick={() => likeCount(item.id)}>Like</Button>
            Likes: {item.likes}
          </span>
        </Container>
      );
    });
  };
  return <Container>{buildAllPosts()}</Container>;
}
export default View;
