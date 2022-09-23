import React from "react";
import "./ProfileGuestPage.css";
import Header from "../../components/Header/Header";
import ProfileGuestInfo from "../../components/ProfileGuestInfo/ProfileGuestInfo";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Container from "../../components/HomeComponents/HomeContainer/Container";

const ProfileGuestPage = () => {
  return (
    <div className='profile'>
      <Container className='profile-cont'>
        <Header className='profile-header' />
      </Container>
      <ProfilePicture />
      <Container>
        <ProfileGuestInfo />
      </Container>
    </div>
  );
};

export default ProfileGuestPage;
