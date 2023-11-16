import './App.css';
import Popular from './components/Popular';
import SubReddits from './components/SubReddits';
import Container from './components/Container';

function App() {
  return (
    <Container>
      <h1>FakeReddddddit</h1>
      <hr/>
      <Popular />
      <hr/>
      <SubReddits />
      <hr/>
      <footer>
        <h2>Bye</h2>
      </footer>
    </Container>
  );
}

export default App;
