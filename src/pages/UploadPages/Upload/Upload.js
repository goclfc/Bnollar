import React from "react";
import "./Upload.css";
import Header from "../../../components/Header/Header";
import Container from "../../../components/HomeComponents/HomeContainer/Container";
import UploadPost from "../../../pictures/UploadImg.svg";
import UploadNft from "../../../pictures/UploadNft.svg";
import { Link } from "react-router-dom";

function Upload() {
  return (
    <Container className='upload-cont'>
      <div className='upload-header-cont'>
        <Header className='upload-header' />
      </div>
      <div className='upload-text-cont'>
        <h1>Upload post or NFT</h1>
        <p>Post photo or sell you NFT on our platform.</p>
      </div>
      <div className='post-or-nft-cards-cont'>
        <Link to={"/uploadpostpage"} className='upload-post-card'>
          <img src={UploadPost} alt='upload' className='upload-post-icon' />
          <div className='upload-post-text'>
            <h1>Post</h1>
            <p>share photos, videos & messages with friends & family</p>
          </div>
        </Link>
        <Link to={"/uploadnftpage"} className='upload-nft-card'>
          <img src={UploadNft} alt='upload' className='upload-post-icon' />
          <div className='upload-nft-text'>
            <h1>
              NFT <span className='nft-span'>(A non-fungible token)</span>
            </h1>
            <p>upload your NFT file, Image, Video, Audio, or 3D Model</p>
          </div>
        </Link>
      </div>
    </Container>
  );
}

export default Upload;
