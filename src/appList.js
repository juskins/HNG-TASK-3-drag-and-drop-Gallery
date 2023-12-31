import { Routes, Route, Navigate } from 'react-router-dom'; // Import necessary components from React Router v6

import LoginForm from './Auth';
import ImageGallery from './imageGallery';

// Initialize Firebase
// const auth = getAuth();

const AppList = () => {
  return (
    <div className = 'App'> 
     <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/gallery/*" element={<ImageGallery />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
    </div>
  );
};


export default AppList;
