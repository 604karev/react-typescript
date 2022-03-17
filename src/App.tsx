import React from 'react';
import { CustomInput } from './components/CustomInput';
import { Headline } from './components/Headline';
import { LoadPerson } from './components/LoadPerson';

function App() {
  return (
    <div className="App">
      <div className="container-sm">
        <Headline>
          <div>Hello world</div>
        </Headline>
        <div className='mx-4'>
          <CustomInput defaultValue='Some value' />
        </div>
        <div className='mx-4'>
          <LoadPerson />
          typescript
        </div>
      </div>
    </div>
  );
}

export default App;
