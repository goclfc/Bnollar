import React from "react";
import "./ProfileUserPage.css";
import Header from "../../components/Header/Header";
import ProfileUserInfo from "../../components/ProfileUserInfo/ProfileUserInfo";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Container from "../../components/HomeComponents/HomeContainer/Container";

const ProfileUserPage = () => {
  return (
    <div className='profile'>
      <Container className='profile-cont'>
        <Header className='profile-header' />
      </Container>
      <ProfilePicture />
      <Container>
        <ProfileUserInfo />
      </Container>
    </div>
  );
};

export default ProfileUserPage;
