import './App.css';
import { useRef } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  // myRef is used as a target for automatically scrolling back to the top after changing pages
  const myRef = useRef(null);
  return (
    <div className="App" ref={myRef}>
      <Header />
      <Main myRef={myRef} />
    </div>
  );
}

export default App;
