import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  selectPosts,
  addPost,
  removePost,
  editPost,
} from "./postsSlice";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #efecec;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 3.75rem 5rem;
`;

const PostListItem = styled.div`
  padding: 10px;
`;

const PostTitle = styled.div``;

const AddPostButtonContainer = styled.div`
  cursor: pointer;
  width: 10%;
  margin: auto;
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: #edf2f7;
  border-radius: 8px;
  font-weight: 600;

  &:hover {
    background-color: #e2e8f0;
  }
`;


const FormContainer = styled.div`
  padding: 0.625rem 1rem;
  /* margin: 1.25rem -1.25rem; */
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  border-radius: 0.3125rem;
  background: #fff;
  width: 50%;
  margin: 10px auto;
`;

const FormContainerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FormLabel = styled.label``;

const FormContainerTitleInput = styled.input`
  flex: 1;
  font-size: 0.9375rem;
  width: 50%;
  margin: auto;
  height: 100px;
`;

const FormContainerBodyInput = styled.input`
  flex: 1;
  font-size: 0.9375rem;
  padding: 0.75rem 0.5rem;
  width: 50%;
  margin: auto;
  height: 100px;
`;

const AddPostButton = styled.button``;

const Posts = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  const onSubmit = () => {
    let data = {
      id: posts.length + 1,
      title: title,
      body,
    };

    dispatch(addPost(data));
    setShowAddPost(false);
    setTitle("");
    setBody("");
  };

  const deletePost = (id) =>{
    
    dispatch(removePost({id: id}));
  }

  return (
    <Container>
      <PostsContainer>
        {posts && posts.length > 0 ? (
          posts.map((post, index) => {
            return (
              <PostListItem key={index}>
                <Link to={`/post/${post.id}`}>
                  <PostTitle>{post.title}</PostTitle>
                </Link>
                <span><button className="btn btn-warning" onClick={() => deletePost(post.id)}>Delete Post</button></span>
              </PostListItem>
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </PostsContainer>
      <AddPostButtonContainer onClick={() => setShowAddPost(true)}>
      <button className="btn btn-primary">Add Post</button>
      </AddPostButtonContainer>

      {showAddPost ? (
        <FormContainer>
          <FormContainerDiv>
            <FormLabel>Post heading</FormLabel>
            <FormContainerTitleInput
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormContainerDiv>

          <FormContainerDiv>
            <FormLabel>Post Detail</FormLabel>
            <FormContainerBodyInput
              type="textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </FormContainerDiv>
          <AddPostButton onClick={onSubmit}>Submit</AddPostButton>
        </FormContainer>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Posts;