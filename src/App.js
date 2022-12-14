import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Settings from "./pages/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileUserPage from "./pages/ProfileUserPage/ProfileUserPage";
import ProfileGuestPage from "./pages/ProfileGuestPage/ProfileGuestPage";
import Upload from "./pages/UploadPages/Upload/Upload";
import UploadPostPage from "./pages/UploadPages/UploadPostPage/UploadPostPage";
import UploadNft from "./pages/UploadPages/UploadNft/UploadNft";
import PlaceBid from "./pages/UploadPages/PlaceBidPage/PlaceBid";
import Chat from "./pages/Chat/Chat";
import Posts from "./pages/Posts/Posts";
import Explore from "./pages/Explore/Explore";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      {/* test */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile-User' element={<ProfileUserPage />} />
          <Route path='/profile-Guest' element={<ProfileGuestPage />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/uploadpostpage' element={<UploadPostPage />} />
          <Route path='/uploadnftpage' element={<UploadNft />} />
          <Route path='/placebid' element={<PlaceBid />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
