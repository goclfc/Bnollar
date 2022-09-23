import React from "react";
import Content from "../../components/content/Content";
import MorePosts from "../../components/morePosts/MorePosts";
import "./Posts.css";
import Header from "../../components/Header/Header";
function Posts() {
  return (
    <div className='postPage'>
      <Header />
      <Content />
      <p className='morePostsText'>More posts from Michael</p>
      <MorePosts />
    </div>
  );
}

export default Posts;
