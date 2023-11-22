import './App.css';
import Popular from './components/Popular';
import SubReddits from './components/SearchResult';
import Container from './components/Container';
import Search from './components/Search';
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Container>
      <h1 className='text-h1 mb-16 mt-8'>FakeReddddddit</h1>
      <h2 className="text-h2 mb-4">Search Reddit</h2>
      <Search />
      <Outlet />
      <hr/>
      <footer>
        <h2>Bye</h2>
      </footer>
    </Container>
  );
}

export default App;
