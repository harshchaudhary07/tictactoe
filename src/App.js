import React from 'react';
import Board from './components/Board';

import './styles/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>TIC TAC TOE !</h1>
      <Board />
    </div>
  );
};

export default App;
// () => (
//  <>
//   <h1>Welcome to React Parcel Micro App!</h1>
//   <p>Hard to get more minimal than this React app.</p>
// </>
// );
