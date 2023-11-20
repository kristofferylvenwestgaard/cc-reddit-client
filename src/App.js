import './App.css';
import Popular from './components/Popular';
import SubReddits from './components/SubReddits';
import Container from './components/Container';
import Search from './components/Search';
import React from 'react';

function App() {
  return (
    <Container>
      <h1 className='text-h1 mb-16 mt-8'>FakeReddddddit</h1>
      <h2 className="text-h2 mb-4">Search Reddit</h2>
      <Search />
      <h2 className="text-h2 mb-8">Popular</h2>
      <Popular />
      <hr/>
      <footer>
        <h2>Bye</h2>
      </footer>
    </Container>
  );
}

export default App;
