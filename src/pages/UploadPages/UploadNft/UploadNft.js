import React from "react";
import "./UploadNft.css";
import Container from "../../../components/HomeComponents/HomeContainer/Container";
import Header from "../../../components/Header/Header";
import NftLogo from "../../../pictures/NftLogo.svg";
import Ape from "../../../pictures/Ape.png";
import { Link } from "react-router-dom";
function UploadNft() {
  return (
    <Container className='upload-nft-cont'>
      <div className='upload-nft-header-cont'>
        <Header className='uploadNft-header' />
      </div>
      <div className='upload-nft-inner-cont'>
        <div className='upload-nft-inner-img-cont'>
          <img src={Ape} alt='nft' />
          <div className='nft-corner-logo-cont'>
            <img src={NftLogo} alt='nftlogo' />
            <p>NFT</p>
          </div>
        </div>
        <div className='upload-nft-name-input-cont'>
          <label htmlFor='name'>Name</label>
          <input type='text' placeholder='Nft name' />
        </div>
        <div className='upload-nft-external-link-input-cont'>
          <label htmlFor='externaLink'>External link</label>
          <p>We will include a link to this URL on the item’s detail page.</p>
          <input type='text' placeholder='Https://yoursite.io/item/123' />
        </div>
        <div className='upload-nft-decription-input-cont'>
          <label htmlFor='Description'>Description</label>
          <p>
            The description will be included on the item’s detailed page
            underneath its image.
          </p>
          <input type='text' placeholder='Write description here' />
        </div>
        <div className='blokchain-select-cont'>
          <label htmlFor='blockchain'>Blockchain</label>
          <select name='blockchain' id='blockchain'>
            <option value='Etherium'>Etherium</option>
            <option value='Bitcoin'>Bitcoin</option>
            <option value='Ripple'>Ripple</option>
            <option value='Dodge Coin'>Dodge Coin</option>
          </select>
        </div>
        <div className='suply-select-cont'>
          <label htmlFor='suply'>Supply</label>
          <p>The number of copies that can be minted. No gas cost to you!</p>
          <select name='suply' id='suply'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='5'>5</option>
            <option value='10'>10</option>
          </select>
        </div>
        <div className='upload-nft-footer'>
          <Link to={"/upload"} className='upload-nft-back-btn'>
            Back
          </Link>
          <Link to={"/placebid"} className='upload-nft-upload-btn'>
            Upload
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default UploadNft;
