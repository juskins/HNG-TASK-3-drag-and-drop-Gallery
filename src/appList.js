import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import necessary components from React Router v6
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase authentication functions

import LoginForm from './Auth';
import ImageGallery from './imageGallery';

// Initialize Firebase
const auth = getAuth();

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

// A custom PrivateRoute component to protect the gallery route
const PrivateRoute = ({ element: Element, ...rest }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <Route
      {...rest}
      element={
        user ? (
          <Element />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default AppList;
