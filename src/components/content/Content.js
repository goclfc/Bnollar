import React from "react";
import productImg from "../../assets/Rectangle 6601.png";
import commentPic1 from "../../assets/Ellipse 1.png";
import commentPic2 from "../../assets/Ellipse 1 (1).png";
import send from "../../assets/Send.svg";
import heart from "../../assets/Heart.svg";
import comment from "../../assets/Comment2.svg";
import paper from "../../assets/Paper.svg";
import bookmark from "../../assets/Bookmark.svg";

function Content() {
  return (
    <div className='content'>
      <img src={productImg} className='productImg'></img>
      <div className='commentsComtainer'>
        <ul className='commentList'>
          <li className='comment1 commentListItem'>
            <img src={commentPic1} className=''></img>
            <div className='nameAndComent'>
              <p className='name'>Michael</p>
              <p className='commentText'>@mmichael24</p>
            </div>
          </li>
          <li className='comment2 commentListItem'>
            <img src={commentPic2} className=''></img>
            <div className='nameAndComent'>
              <p className='name'>Michael</p>
              <p className='commentText'>Love it</p>
            </div>
          </li>
        </ul>
        <div className='iconsContainer'>
          <img src={heart} className='commentIcons'></img>
          <img src={comment} className='commentIcons'></img>
          <img src={paper} className='commentIcons'></img>
          <img src={bookmark} className='bookmark'></img>
        </div>
        <p className='likes'>5 likes</p>
        <div className='inputContainer'>
          <input placeholder='Write your comment'></input>
          <img src={send} className='send'></img>
        </div>
      </div>
    </div>
  );
}

export default Content;
