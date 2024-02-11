import 'module-alias/register';

import React from 'react';
import './App.css';
import { SimpleComponent } from './components/simplecomponent';

function App() {
  return (
    <div className="App">
      <SimpleComponent></SimpleComponent>
      hello
    </div>
  );
}

export default App;
