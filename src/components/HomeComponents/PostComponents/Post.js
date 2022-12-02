import React from "react";
import "./Post.css";
import { PostData } from "./PostData";
import heart from "../icons/heart.svg";
import Comment from "../icons/Comment.svg";
import Send from "../icons/Send.svg";
import Stroke from "../icons/Stroke.svg";
import StrokeFilled from "../icons/StrokeFilled.svg";
import SendComment from "../icons/SendComment.svg";
import { useState } from "react";

function Post() {
  const [refresh, setRefresh] = useState(true);
  function addToFavorites(post) {
    post.bookmarked = true;
  }
  function removeFromFavorites(post) {
    post.bookmarked = false;
  }
  return (
    <div className="post-main__wrapper">
      {PostData.map((post) => {
        return (
          <>
            <div className="post-content">
              {/********************** HEADER************************************/}
              <div className="post-header">
                <div className="post-profile-image">
                  <a href={post.linkTo}>
                    {" "}
                    <img src={post.profileImg} alt="image" />{" "}
                  </a>
                </div>
                {/**********************************************************/}

                {/********************* NICKNAME AND NAME*************************************/}
                <div className="name-and-nick">
                  <a className="post-profile-name" href={post.linkTo}>
                    {post.name}
                  </a>
                  <a className="post-profile-nickname" href={post.linkTo}>
                    {post.nickName}{" "}
                  </a>
                </div>
              </div>
              {/**********************************************************/}

              {/************************ LOGO AND SEARCH **********************************/}
              <div className="post-main-img">
                <img src={post.img} alt="img" />
              </div>

              {/**********************************************************/}

              {/********************* POST-FUNCTIONS*************************************/}

              <div className="post-functions">
                <div className="post-icons">
                  <div className="action-icons">
                    <img src={heart} alt="heart" />
                    <img className="comment-icon" src={Comment} alt="comment" />
                    <img src={Send} alt="heart" />
                  </div>

                  {post.bookmarked ? (
                    <img
                      className="stroke"
                      src={StrokeFilled}
                      alt="stroke"
                      onClick={() => {
                        removeFromFavorites(post);
                        setRefresh(!refresh);
                      }}></img>
                  ) : (
                    <img
                      className="stroke"
                      src={Stroke}
                      alt="stroke"
                      onClick={() => {
                        addToFavorites(post);
                        setRefresh(!refresh);
                      }}></img>
                  )}
                </div>

                {/********************* LIKES *************************************/}
                <div className="likes-counter"> 5 likes</div>
              </div>
              {/**********************************************************/}

              {/********************* COMMENT*************************************/}

              <div className="comment-wrapper">
                <input type="text" placeholder="Write your comment" />
                <img
                  className="send-comment"
                  src={SendComment}
                  alt="sendComment"
                />
              </div>

              {/**********************************************************/}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Post;
