import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/HomePage/HomePage.jsx'
import CharactersPage from './pages/CharactersPage/CharactersPage.jsx'
import EpisodesPage from './pages/EpisodesPage/EpisodesPage.jsx'
import NotFound from './pages/NotFoundPage/NotFoundPage.jsx'
import SelectedEpisode from './components/SelectedEpisode/SelectedEpisode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='characters' element={<CharactersPage />}></Route>
          <Route path='episodes' element={<EpisodesPage />}></Route>
          <Route path='episode/:id' element={<SelectedEpisode />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
)
