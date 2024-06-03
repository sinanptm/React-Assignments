// App.js
import React from 'react';
import './App.css';
import Counter from './components/apiCounter';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <Counter/>
    </Container>
  );
}

export default App;