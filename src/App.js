import React, { Component } from 'react';

import NavApp from './Components/NavApp/NavApp';
import TabsSection from './Components/TabsSection/TabsSection';
import Articles from './Components/Articles/Articles';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className='HeaderArea'>
          <h4>Bloggy the Blogger</h4>

        </header>
        <NavApp />
        {/* <h1>Blogging App</h1> */}
        <div className='BlogBody' >
          <TabsSection />



          {/* <Articles /> */}

          <div className='RightSideBlogBody'>
            <h4>Blog Body</h4>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
