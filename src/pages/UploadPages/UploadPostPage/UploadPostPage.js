import React from "react";
import Header from "../../../components/Header/Header";
import Container from "../../../components/HomeComponents/HomeContainer/Container";
import "./UploadPostPage.css";
import PostIcon from "../../../pictures/PostIcon.svg";
import Gallery from "../../../pictures/Gallery.svg";
import Location from "../../../pictures/Location.svg";
import { Link } from "react-router-dom";

function UploadPostPage() {
  return (
    <Container className='uploadPost-cont'>
      <div className='uploadPost-header-cont'>
        <Header className='uploadPost-header' />
      </div>

      <div className='uploadPost-content-cont'>
        <div className='create-new-item-cont'>
          <div className='post-right-icon-cont'>
            <div className='post-right-icon'>
              <img src={PostIcon} alt='post' />
              <p>Post</p>
            </div>
          </div>
          <div className='create-new-item-inner'>
            <img src={Gallery} alt='gallery' />
            <h1>Create new item</h1>
            <p>Image, Video, Audio, or 3d model</p>
          </div>
        </div>
        <div className='location-input-cont'>
          <label htmlFor='location' className='location-label'>
            Location
          </label>
          <div className='input-cont'>
            <img src={Location} alt='Location' />
            <input type='text' name='location' placeholder='Your location' />
          </div>
        </div>
        <div className='description-input-cont'>
          <label htmlFor='description' className='description-label'>
            Description
          </label>
          <div className='description-input' name='description'>
            <input type='text' placeholder='Write description here' />
          </div>
        </div>
        <div className='upload-post-btns'>
          <Link to={"/upload"} className='upload-post-back-btn'>
            Back
          </Link>
          <Link to={"/asd"} className='upload-post-upload-btn'>
            Upload
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default UploadPostPage;
