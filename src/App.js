import BlogContainer from './components/BlogContainer';
import Navigation from './components/NavBar';
import { Provider } from "react-redux";
import store from "./redux/store";
import React, { useState, useEffect } from 'react';

function App() {
 

  
  
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <BlogContainer />
      </div>
    </Provider>
  );
}

export default App;
