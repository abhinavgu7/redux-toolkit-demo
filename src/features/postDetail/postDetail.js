import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import Comments from "../comments/comments"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #efecec;
`

const PostsContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 3.75rem 5rem;
  width: 20%;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  border-radius: 0.3125rem;
  background: #fff;
  margin: auto;
`

const Heading = styled.h2``

const PostLabel = styled.h4`
  font-weight: 300;
`

const PostDetail = props => {
  const { id } = useParams()
  if (!id) {
  }
  const postDetail = useSelector(state => {
    let post = state.posts.find(post => post.id == id)

    return post;
  })

  return (
    <Container>
      <PostsContainer>
        <Heading>Title:</Heading>
        <PostLabel>{postDetail && postDetail.title}</PostLabel>
        <Heading>Body:</Heading>
        <PostLabel>{postDetail && postDetail.body}</PostLabel>
      </PostsContainer>
      {postDetail ? <Comments id={postDetail.id} /> : null}
    </Container>
  )
}

export default PostDetail