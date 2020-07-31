import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const heartBeatUnderline =  <svg className='heartbeat underline' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 640" width="72" height="72"><path d="M623.31 281.26H105.73c-.09 0-.17-.07-.18-.17-1.53-14.88-6.08-59.28-7.61-74.14 0-.03-.05-.03-.05 0-2.81 31.65-10.81 121.82-13.51 152.34-.05.57-.89.56-.92-.01-4.07-61.36-15.99-241.03-20.09-302.77-.02-.36-.55-.36-.58 0-3.72 47.5-14.7 187.94-18.46 235.93-.01.18-.27.19-.29.01-1.15-10.69-4.34-40.44-5.46-50.94-.04-.36-.57-.37-.62-.01-.74 5.3-2.57 18.55-5.51 39.76H21"/></svg>;
  return (
    <div className="App">
      <Navbar heartBeatLine={heartBeatUnderline} />
      <Home underline={heartBeatUnderline} />
      <About underline={heartBeatUnderline} />
      <Services underline={heartBeatUnderline} />
      <QuoteForm underline={heartBeatUnderline} />
      <Contact underline={heartBeatUnderline} />
      <Footer />
    </div>
  );
}

export default App;
