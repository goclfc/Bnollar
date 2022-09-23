import React from 'react'
import Feed from '../../components/FeedComponents/Feed/Feed'
import "./HomePage.css"
import Container from '../../components/HomeComponents/HomeContainer/Container'
import LeftBar from '../../components/HomeComponents/Left-right-bar-components/leftBar/LeftBar'
import Post from '../../components/HomeComponents/PostComponents/Post'
import RightBar from '../../components/HomeComponents/Left-right-bar-components/rightBar/RightBar'
import RespNavbar from '../../components/HomeComponents/HomeRespNavbar/RespNavbar'

const HomePage = () => {
  return (
    <div className="home_page_wrapper">
      <Container>
        <LeftBar />
        <div className="center-content__wrapper">
          <RespNavbar />
        <Feed/>
         <Post />
    
        </div>
        <RightBar />
      </Container>
    </div>
  )
}

export default HomePage