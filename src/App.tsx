import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './components/Theme'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import JoinPage from './views/JoinPage/JoinPage';
import GamePage from './views/GamePage/GamePage';

function App() {
  return (
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/games" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
