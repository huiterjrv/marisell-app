import React from 'react';
import { Route } from 'wouter';
import 'w3-css/w3.css'
import 'App.css'
import 'fontsGoogle.css'

import { ThemesCategoriesContext } from 'context/ThemesCategoriesContext'
import fondo from 'images/books.jpg'
import HeadingTitel from 'components/Header'
import NavThemes from 'components/Nav'
import Container from 'pages/Conteiner'
import Home from 'pages/Home'
import NavPage from 'components/NavPage'
import Admin from 'pages/Admin';
import EditAdmin from 'pages/EditAdmin'
import EditNewWritten from 'components/admin/CreateAdmin/EditNewWritten'


function App() {

  return (
    <ThemesCategoriesContext>
      <div className="App">
        <img src={fondo} id='fondo' alt='' />
        <HeadingTitel />
        <div className='container-app'>
          <aside>
            <NavPage />
          </aside>
          <main className='container'>
            <Route path='/' component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/admin/:route' component={EditAdmin} />
            <Route path='/admin/written/:route' component={EditNewWritten} />
            <Route path='/writtens/:route' component={Container} />
          </main>
          <aside>
            <NavThemes />
          </aside>
        </div>
      </div>
    </ThemesCategoriesContext>
  );
}

export default App;
