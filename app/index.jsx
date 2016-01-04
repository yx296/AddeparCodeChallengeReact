import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Boxholder from './components/Boxholder.jsx';

main();

function main() {
  const app = document.createElement('div');
  app.className = "container";
  document.body.appendChild(app);

  const boxPositions = [
    'topRow',
    'topRow',
    'topRow',
    'middleRow',
    'bottomRow',
    'bottomRow',
    'bottomRow'
   ]

  ReactDOM.render(<Boxholder boxPositions={boxPositions} />, app);
}



