import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Header from './Components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './Components/AboutIconLink';


export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='app_container'>

          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
            ></Route>  
            <Route path='/about' element={<AboutPage/>} />
          </Routes>
          
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
    )
}