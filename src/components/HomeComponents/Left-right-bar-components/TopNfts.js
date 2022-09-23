import React from 'react'
import './TopNfts.css'
import { TopNftsData } from './TopNftsData'

function TopNfts() {
  return (
    <div className='topnfts-wrapper'>
        <div className="topnfts-title"> <h1>Top NFT’s</h1></div>

        <div className="topnfts-list">

        {TopNftsData.map((profile) => {


return (

      <div className="nft-profile-cont">
        <div className="nft-profile-img">
          <img src={profile.profileNftImg} alt="nft" />
        </div>
        <div className="nft-profile-name">
          <a href={profile.linkTO}>{profile.profileNftName}</a>
        </div>
      </div>


)

})}

        </div>
        
    </div>
  )
}

export default TopNfts