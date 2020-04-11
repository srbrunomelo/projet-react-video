import React from 'react'; 

import Header from './components/header'
import Footer from './components/footer'
import Body from './components/body'

import { VideoContext } from './Services/data/video/videoContext';

function App() { 
  return (
    <VideoContext>
        <Header title="Videos Mania" /> 
          <Body />
        <Footer />
    </VideoContext> 
  );
}

export default App;
