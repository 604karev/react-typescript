import React from 'react';
import { CustomInput } from './components/CustomInput';
import { Headline } from './components/Headline';

function App() {
  return (
    <div className="App">
      <div className="container-sm">
        <Headline>
          <div>Hello world</div>
        </Headline>
        <div>
          <CustomInput defaultValue='Some value' />
        </div>
      </div>
    </div>
  );
}

export default App;
