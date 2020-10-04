import React from 'react';
import { Route } from 'wouter';
import 'w3-css/w3.css'
import 'App.css'
import 'fontsGoogle.css'

import fondo from 'images/books.jpg'
import HeadingTitel from 'components/Header'
import NavThemes from 'components/Nav'
import {ThemesContextProvider} from 'context/ThemesContext'
import Container from 'pages/Conteiner'
import Home from 'pages/home'

function App() {

  return (
    <ThemesContextProvider>
    <div className="App">
      <img src={fondo} id='fondo' alt='' />
      <HeadingTitel />
      <div className='container-app'>
        <aside>

        </aside>
        <main className='container'>
          <Route path='/' component={Home} />
          <Route path='/:route' component={Container} />
        </main>
        <aside>
          <NavThemes />
        </aside>
      </div>
    </div>
    </ThemesContextProvider>
  );
}

export default App;
