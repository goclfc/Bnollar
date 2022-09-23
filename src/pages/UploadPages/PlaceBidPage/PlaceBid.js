import React from "react";
import Header from "../../../components/Header/Header";
import Container from "../../../components/HomeComponents/HomeContainer/Container";
import "./PlaceBid.css";
import Ape from "../../../pictures/Ape.png";
import HeartIcon from "../../../pictures/HeartIcon.svg";
import EthIcon from "../../../pictures/EthIcon.svg";
import { bidHistory } from "./BidHistoryData";
import { mintedData } from "./MintedData";

function PlaceBid() {
  return (
    <Container className='placeBid-cont'>
      <div className='placeBid-header-cont'>
        <Header className='placeBid-header' />
      </div>
      <div className='paceBid-main-wrapper'>
        <div className='placeBid-left-cont'>
          <img src={Ape} alt='nft' />
        </div>
        <div className='placeBid-right-cont'>
          <div className='nft-title-heart-cont'>
            <div className='title-text-cont'>
              <h1>Bored #134</h1>
              <p>
                {" "}
                Owned by <span>mmicheal24</span>
              </p>
            </div>
            <div className='heart-icon-cont'>
              <img src={HeartIcon} alt='heartIcon' />
            </div>
          </div>
          <div className='creator-and-owner-cont'>
            <div className='creator-cont'>
              <div className='creator-image-cont'>
                <img
                  src='https://res.cloudinary.com/diyky5uya/image/upload/v1648807870/Ellipse_1_1_yjzil2.png'
                  alt=''
                />
              </div>
              <div className='creator-text'>
                <div className='creator-title'>
                  <p>Creator</p>
                  <h1>Bored Ape Yacht Club</h1>
                </div>
              </div>
            </div>
            <div className='owner-cont'>
              <div className='owner-image-cont'>
                <img
                  src='https://res.cloudinary.com/diyky5uya/image/upload/v1648804907/Ellipse_1_fsaztg.png'
                  alt=''
                />
              </div>
              <div className='owner-text'>
                <div className='creator-title'>
                  <p>Owner</p>
                  <h1>Levan</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='price-and-time-cont'>
            <div className='curent-price-cont'>
              <h3>Current price</h3>
              <div className='price-cont'>
                <img src={EthIcon} alt='ethicon' />
                <p>
                  42.2 <span>($124,839.84)</span>
                </p>
              </div>
            </div>
            <div className='time-cont'>
              <h3>Remaining time</h3>
              <p>18h 35m 32s</p>
            </div>
          </div>
          <button className='place-bid'>Place bid</button>
          <div className='bid-history-cont'>
            <h3>Bid history</h3>
            <div className='bid-history-map'>
              {bidHistory.map((user, index) => {
                return (
                  <div key={index} className='bid-history-item'>
                    <div className='bid-item-img-name'>
                      <img src={user.profileImg} alt='img' />
                      <div className='bid-item-name-hours'>
                        <h3>{user.userName}</h3>
                        <p>{user.time}</p>
                      </div>
                    </div>
                    <div className='crypto-and-dollar'>
                      <h3>{user.crypto}Eth</h3>
                      <p>${user.dollar}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='minted'>
            <h3>Minted</h3>
            <div className='minted-map'>
              {mintedData.map((user) => {
                return (
                  <div className='minted-item'>
                    <div className='minted-item-img-name'>
                      <img src={user.profileImg} alt='img' />
                      <div className='minted-item-name-hours'>
                        <h3>{user.userName}</h3>
                        <p>{user.time}</p>
                      </div>
                    </div>
                    <div className='crypto-and-dollar'>
                      <h3>{user.crypto}Eth</h3>
                      <p>${user.dollar}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PlaceBid;
